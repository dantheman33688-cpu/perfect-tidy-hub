self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/levels/:id(\\d+)",
        "destination": "/levels/normal/:id"
      },
      {
        "source": "/levels/happy-womans-day/:id(\\d+)",
        "destination": "/levels/Happy%20Woman's%20Day/:id"
      },
      {
        "source": "/levels/happy-valentine-day/:id(\\d+)",
        "destination": "/levels/Happy%20Valentine%20Day/:id"
      },
      {
        "source": "/levels/happy-new-year/:id(\\d+)",
        "destination": "/levels/Happy%20New%20Year/:id"
      },
      {
        "source": "/levels/mother-and-child/:id(\\d+)",
        "destination": "/levels/Mother%20and%20Child/:id"
      },
      {
        "source": "/levels/summer-vibe/:id(\\d+)",
        "destination": "/levels/Summer%20Vibe/:id"
      },
      {
        "source": "/levels/unpacking-memories/:id(\\d+)",
        "destination": "/levels/Unpacking%20Memories/:id"
      },
      {
        "source": "/levels/christmas/:id(\\d+)",
        "destination": "/levels/Christmas/:id"
      },
      {
        "source": "/levels/halloween/:id(\\d+)",
        "destination": "/levels/Halloween/:id"
      },
      {
        "source": "/levels/kitchen/:id(\\d+)",
        "destination": "/levels/Kitchen/:id"
      },
      {
        "source": "/levels/thanksgiving/:id(\\d+)",
        "destination": "/levels/Thanksgiving/:id"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()