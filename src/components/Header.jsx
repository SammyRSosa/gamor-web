import { Navbar } from "./Navbar"

export function Header () {
    return (
        <header className="main-header">
            <Navbar/>
            
            <img  className="logo" src="https://lh3.googleusercontent.com/pw/ABLVV84d7VCjfilYYjEdfURjNK1VKLQgkGBo4azkY4cYMw5l0D1kmnh9lZiDMUu8kLVHg1sqObcst0cumuioXG3WXOU_CaQ_MoHtsNv9LNypv7xcmGjFpY9xJJRWOUMZYo0I6IuUwgUU6gSPZgPL-LRZtgP-hGzqiSG3uxmFx9qFeVrJp8y9twisS420HDF-tVw7cLjgAOxA5EUHUYLOxlaYial7yBFl_DPQyHTdO5tO6KMl4IIz2Tia_BtnXrG_kWNlV5C3DdzWf8GxC2V8xLkNMsEglYog18JYTZDOS8vARt36i8z616PAgWk_uMFf1LM5rlOfoIT2yyG6ghJcyQHGqYeOWoTnEnHsXBvxayMazb4F2QN4_t4e354z8H11caa7IN4U81D_ASWMxcQA-bQ9XmRanFrBrMoO-IqCZCEu1oiMUB0iAe-x4p8v990SGAVfLutrjnU8xRqu_KqEy3GBFnNs4m0UQtop6_hddk-dB_IFJgb6L647MF6X8723IRY_c1nA3KHc0uIl4CdQJ3ki5eQky9TX8DYEs-MqUHiEpuwYC42Dekti-EfukemH5fesYrY2Zdrrqw-PRKBo6ta_vAIUEf3ZF4lcfx4cRdm5nBU9SJPmZgznxtLoZ5__5ZEwUuJbY6wLVYW43D3hBZA7zWPWFrEH7WjOrNMdisYgR6VoykIDQG9FYW-4uUFIO8CqztTIlqhnJr_RJv2EkCihX4JRVjv9ak8nE0N7uzDHcyDGVOJIVNgSLw30rj3tw3NmU_ayc7yUGMVkRu1BIe-w8MI4bveU9jPYPb5oyF70LJ5l3NxpggLMhB8xGH5pfO0QgtZDboJhFl3nV1wX4bgqdRHxdTWTLb84yAJocqE3RYns9n0h5mTC8sqQqMpuIup_OqAJOWUt2IUo_aRMFCV4R4WgvI5xMUiXRjXXKE9W27qsH2XpaplUKTsLjkYX=w930-h930-s-no?authuser=0" alt="logo" />
           
            <nav className="header-account">
                <a>Sign in</a>
                <button>Create account</button>
            </nav>
       </header>
    )
}