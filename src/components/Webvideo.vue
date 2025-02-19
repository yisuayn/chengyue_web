<template>
  <div class="web_video">
    <br/>
    <video
      ref="video"
      :src="videoUrl"
      :width="width"
      @play="onPlay"
      @pause="onPause"
      @ended="onEnded"
    ></video>
    <div class="controls">
      <!-- 播放/暂停按钮 -->
      <button @click="togglePlay">
        {{ isPlaying ? "暂停" : "播放" }}
      </button>
      <!-- 音量控制 -->
      <input
        type="range"
        v-model="volume"
        @input="setVolume"
        min="0"
        max="1"
        step="0.1"
      />

      <!-- 进度条 -->
      <input
        type="range"
        v-model="progress"
        @input="setProgress"
        :max="videoDuration"
      />
    </div>

    <!-- 视频当前时间和总时间 -->
    <div class="video-info">
      <span>{{ currentTime }} / {{ videoDuration }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // 视频源地址
      width: "100%", // 视频宽度
      // height: "100vw", // 视频高度
      isPlaying: false, // 视频是否在播放
      volume: 1, // 音量，范围 [0, 1]
      progress: 0, // 视频进度，范围 [0, videoDuration]
      currentTime: 0, // 当前播放时间
      videoDuration: 0, // 视频总时长
      autoplay: true,
    };
  },
  mounted() {
    const video = this.$refs.video;
    video.volume = this.volume; // 设置初始音量
    video.addEventListener("timeupdate", this.updateProgress); // 监听视频进度
    video.addEventListener("durationchange", this.setDuration); // 监听视频时长变化
  },
  methods: {
    // 切换播放和暂停
    togglePlay() {
      const video = this.$refs.video;
      if (this.isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      this.isPlaying = !this.isPlaying;
    },

    // 更新进度条
    updateProgress() {
      const video = this.$refs.video;
      this.progress = video.currentTime;
      this.currentTime = this.formatTime(video.currentTime);
    },

    // 设置视频时长
    setDuration() {
      const video = this.$refs.video;
      this.videoDuration = video.duration;
    },

    // 设置音量
    setVolume() {
      const video = this.$refs.video;
      video.volume = this.volume;
    },

    // 设置视频进度
    setProgress() {
      const video = this.$refs.video;
      video.currentTime = this.progress;
    },

    // 格式化时间
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
    },

    // 视频结束事件
    onEnded() {
      this.isPlaying = false;
      this.progress = 0;
      this.currentTime = "0:00";
    },

    // 视频播放事件
    onPlay() {
      this.isPlaying = true;
    },

    // 视频暂停事件
    onPause() {
      this.isPlaying = false;
    },
  },
};
</script>

<style scoped>
.video-player {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.controls {
  margin-top: 20px;
}

input[type="range"] {
  width: 100%;
  margin: 10px 0;
}

.video-info {
  margin-top: 10px;
}
</style>
