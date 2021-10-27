<template>
  <div>
    <h2>Upload Assessment Data</h2>

    <!-- action="/api/v0.1/admin/assessment/upload" -->
    <form @submit.prevent="uploadFile">
      <div class="input-group">
        <label
          class="input-label"
        >
          Select Year
        </label>
        <select
          v-model="year"
          class="input-select"
          name="year"
          required
        >
          <option
            disabled
            value=""
          >
            Select a Year
          </option>
          <option
            v-for="y in years"
            :key="y"
          >
            {{ y }}
          </option>
        </select>
      </div>
      <div class="input-group">
        <label
          class="input-label"
        >
          Select Assessment
        </label>
        <select
          v-model="assessment"
          class="input-select"
          name="assessment_id"
          required
          @change="period = ''"
        >
          <option
            disabled
            value=""
          >
            Select an Assessment
          </option>
          <option
            v-for="a in assessments"
            :key="a.id"
            :value="a.id"
          >
            {{ a.name }}
          </option>
        </select>
      </div>

      <div class="input-group">
        <label
          class="input-label"
        >
          Select Period
        </label>
        <select
          v-model="period"
          class="input-select"
          required
          name="period_id"
        >
          <option
            disabled
            value=""
          >
            Select a Period
          </option>
          <option
            v-for="p in periods[assessment]"
            :key="p.id"
            :value="p.id"
          >
            {{ p.name }}
          </option>
        </select>
      </div>

      <div class="input-group">
        <input
          ref="assessmentFile"
          required
          type="file"
          @change="fileSelected"
        >
      </div>

      <div class="submit-group">
        <input
          class="submit"
          :diabled="uploading"
          type="submit"
          value="Upload Data"
        >

        <div class="submit-message">
          {{ submitMessage }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Pull this from the api
      years: ['2022', '2021'],
      assessments: [
        {
          id: 1,
          name: 'NWEA MAP - Mathematics'
        },
        {
          id: 2,
          name: 'NWEA MAP - ELA'
        },
        {
          id: 3,
          name: 'STAR - ELA'
        },
        {
          id: 4,
          name: 'STAR - Mathematics'
        }
      ],
      periods: {
        1: [
          {
            id: 1,
            name: 'Fall'
          },
          {
            id: 2,
            name: 'Winter'
          },
          {
            id: 3,
            name: 'Spring'
          }
        ],
        2: [
          {
            id: 4,
            name: 'Fall'
          },
          {
            id: 5,
            name: 'Winter'
          },
          {
            id: 6,
            name: 'Spring'
          }
        ],
        3: [
          {
            id: 7,
            name: 'September'
          },
          {
            id: 8,
            name: 'October'
          },
          {
            id: 9,
            name: 'November'
          },
          {
            id: 10,
            name: 'December'
          },
          {
            id: 11,
            name: 'January'
          },
          {
            id: 12,
            name: 'February'
          },
          {
            id: 13,
            name: 'March'
          },
          {
            id: 14,
            name: 'April'
          }
        ],
        4: [
          {
            id: 15,
            name: 'September'
          },
          {
            id: 16,
            name: 'October'
          },
          {
            id: 17,
            name: 'November'
          },
          {
            id: 18,
            name: 'December'
          },
          {
            id: 19,
            name: 'January'
          },
          {
            id: 20,
            name: 'February'
          },
          {
            id: 21,
            name: 'March'
          },
          {
            id: 22,
            name: 'April'
          }
        ]
      },
      year: '',
      assessment: '',
      period: '',
      uploading: false,
      submitMessage: ''
    }
  },
  methods: {
    fileSelected (e) {
      this.assessmentFile = e.target.files[0]
    },
    async uploadFile () {
      this.submitMessage = ''
      this.uploading = true

      const formData = new FormData()

      formData.append('year', this.year)
      formData.append('assessment_id', this.assessment)
      formData.append('period_id', this.period)
      formData.append('file', this.assessmentFile)
      // TODO pull this from a reasonable place
      formData.append('school_id', 1)

      try {
        await this.$axios.post('/api/v0.1/admin/assessment/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        // TODO toast?

        this.submitMessage = 'Data uploaded successfully'
        setTimeout(() => { this.submitMessage = '' }, 5000)
        this.year = ''
        this.assessment = ''
        this.period = ''
      } catch (ex) {
        this.submitMessage = `There was an issue uploading: \n ${ex}`
      } finally {
        this.uploading = false
      }
    }
  }
}
</script>

<style scoped lang="postcss">
.input-group {
  @apply mb-20;
}

.input-label {
  @apply block;
}

.input-select {
  @apply p-4 border border-gray-graph-dark rounded-sm;
}

.submit-group {
  @apply flex flex-row items-center;
}

.submit {
  @apply p-4 border border-blue text-blue bg-white rounded-sm;
}

.submit:hover {
  @apply bg-blue text-white cursor-pointer;
}

.submit:disabled,
.submit:disabled:hover {
  @apply border-gray-graph-dark bg-gray-graph text-gray-text;
}

.submit-message {
  @apply ml-20 text-gray-text italic;
}
</style>
