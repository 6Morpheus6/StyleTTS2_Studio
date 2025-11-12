module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://huggingface.co/spaces/Wismut/StyleTTS2_Studio app",
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r ../requirements.txt",
          "uv pip install pydantic==2.10.6 hf-xet"
        ]
      }
    }
  ]
}
