const Landing = () => {
    return (
        <>
            <div className="landing">
                <div className="intro">
                    <div className="intro-box">
                        <div style={{ position: "absolute" }}>
                            <img style={{ marginLeft: "550%", marginTop: "-50%" }} src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655767a97e68550b45de2f02_Group%2015.svg" />
                            <img style={{ marginLeft: "550%", marginTop: "1900%" }} src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/65576815bfef9adcff45b351_Group%2018.svg" />
                            <img style={{ marginLeft: "4800%", marginTop: "-80%" }} src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/6557683d2097f2218f440d57_Group%2017.svg" />
                            <img style={{ marginLeft: "4800%", marginTop: "-2050%" }} src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655767fa1d996fa10a8ecc13_Group%2016.svg" />
                        </div>
                        <video autoPlay loop muted className="video-background">
                            <source src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/6557a2f10ff028d9189dcb7e_BRC20_BG-transcode.mp4" type="video/mp4" />
                            <source src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/6557a2f10ff028d9189dcb7e_BRC20_BG-transcode.webm" type="video/webm" />
                        </video>
                        {/* Rest of your code */}
                        <div className="justify-between items-center flex">
                            <img style={{ margin: "0 auto" }} className="h-9" src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655768f66276b71a65c10ad2_logo.svg" />
                            <ul style={{ margin: "0 auto" }} className="flex space-x-8">
                                <li>{"</A>"} L2 Testnet</li>
                                <li>{"</A>"} Dashboard</li>
                                <li>{"</A>"} Dashboard</li>
                                <li>{"</A>"} Wiki</li>
                                <li>{"</A>"} Launchpad</li>
                                <li>{"</A>"} Staking</li>
                            </ul>
                        </div>
                        <div>
                            <p style={{ fontSize: "180px", fontWeight: "700" }}>BRC20<span>.com</span></p>
                        </div>
                        <div style={{ marginLeft: "60%" }}>
                            <button className="inline">[ Trade ]</button>
                        </div>
                    </div>
                    <div className="flex space-x-8" style={{ position: "absolute", marginLeft: "15%", marginTop: "-5%" }}>
                        <img src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/65576608e71fa5b99ee1a3dc_%5B.svg" />
                        <pre className="text-left text-xl">
                            Leading infrastructure{"\n"}
                            provider for BRC20 ecosystem{"\n"}
                        </pre>
                        <img src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/65576608e71fa5b99ee1a3dc_%5B.svg" style={{ transform: "rotate(180deg)" }} />
                    </div>
                </div>
                <div className="solution">
                    <p className="text-6xl">First all-in one <span style={{ color: "#ff8000" }}>BRC20</span> solution</p>
                    <div className="solution-content grid grid-cols-2">
                        <div style={{ margin: 'auto auto' }}>
                            <pre className="text-left text-xl text-black">
                                Seamless integratio of advanced BRC20{"\n"}
                                focused features: mobile wallet, cross-chain{"\n"}
                                bridge, multi-mint, marketplace, staking and{"\n"}
                                more{"\n"}{"\n"}
                                Built in discovery tools powered by{"\n"}
                                BRC20.com API for alpha discovery on{"\n"}
                                trending mints and hot tokens
                            </pre>
                        </div>
                        <div>
                            <img src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201-p-1080.webp" />
                        </div>
                    </div>
                </div>
                <div className="defi">
                    <div className="grid grid-cols-2">
                        <div className="mx-auto">
                            <pre className="text-left text-7xl mb-8">
                                Biringing DeFi{"\n"}
                                to Bitcoin{"\n"}
                            </pre>
                            <pre className="text-left text-xl mb-8">
                                .COM token powers the BRC20.com ecosystem,{"\n"}
                                being the first BRC20 token to bring true{"\n"}
                                utility to it holders{"\n"}{"\n"}
                                Stake to participate in new BRC20 launches{"\n"}
                                and receive fees from across the BRC20.com{"\n"}
                                product suite
                            </pre>
                            <button>[ Buy Now ]</button>
                        </div>
                        <div className="mx-auto">
                            <div>
                                <img className="bracket-1" src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8fd94aec99d99cfba79_6.svg" />
                            </div>
                            <img className="inline" src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8c5649d2df1c692800c_Rectangle%202035-p-500.webp" />
                            <div>
                                <img className="bracket-2" src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8fd94aec99d99cfba79_6.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stake">
                    <div className="stake-box">
                        <div className="flex flex-wrap">
                            <div>
                                <img src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655dfb1880a33725e38e4a34_%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-p-500.webp" />
                            </div>
                            <div>
                                <p className="text-6xl text-left mb-8">Stake to Earn</p>
                                <hr className="mb-8" />
                                <div className="flex space-x-8 mb-8">
                                    <div>
                                        <pre className="text-left text-xl">
                                            Participate in the{"\n"}
                                            hottest BRC20 launches{"\n"}
                                            through the first Bitcoin{"\n"}
                                            based Initial Farming{"\n"}
                                            Offering (IFO) platform
                                        </pre>
                                    </div>
                                    <div>
                                        <pre className="text-left text-xl">
                                            Stake your .COM using our gasless{"\n"}
                                            staking solution in order to start{"\n"}
                                            farming rewards, as well as earning{"\n"}
                                            your share of the fees from our other{"\n"}
                                            products
                                        </pre>
                                    </div>
                                </div>
                                <button>[ Stake Now ]</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roadmap">
                    <p className="text-8xl mb-8">Roadmap</p>
                    <div>
                        <div className="grid grid-cols-5" style={{ width: "80%", margin: "0 auto" }}>
                            <div className="roadmap-box">
                                <p className="text-left text-xl title">{"{Q4}"}</p>
                                <p className="text-left text-md content">Dashboard Launch</p>
                            </div>
                            <div className="roadmap-box">
                                <p className="text-left text-xl title">{"{Q4}"}</p>
                                <p className="text-left text-md content">Stake to Earn Launch</p>
                            </div>
                            <div className="roadmap-box">
                                <p className="text-left text-xl title">{"{Q1}"}</p>
                                <p className="text-left text-md content">Super App Launch</p>
                            </div>
                            <div className="roadmap-box">
                                <p className="text-left text-xl title">{"{Q2}"}</p>
                                <p className="text-left text-md content">AMM Launch</p>
                            </div>
                            <div className="roadmap-box outlined">
                                <p className="text-left text-xl title" style={{ opacity: "0" }}>{'a\n'}</p>
                                <p className="text-left text-md content">And more...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="flex footer-box space-x-24">
                        <div>
                            <img className="h-10 mb-8" src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655768f66276b71a65c10ad2_logo.svg" />
                            <pre className="text-left">
                                Copyright @ BRC20.com.{'\n'}
                                All rights reserved.
                            </pre>
                        </div>
                        <div>
                            <div className="flex space-x-24">
                                <ul className="text-left">
                                    <li className="mb-5"><strong>Buy.com</strong></li>
                                    <li>Buybit</li>
                                    <li>HTX</li>
                                    <li>Uniswap</li>
                                    <li>MEXC</li>
                                    <li>BitGet</li>
                                    <li>OKX</li>
                                    <li>Unisats</li>
                                    <li>Ordinals Wallet</li>
                                </ul>
                                <ul className="text-left">
                                    <li className="mb-5"><strong>Socials</strong></li>
                                    <li>Twitter</li>
                                    <li>Telegram</li>
                                </ul>
                                <ul className="text-left">
                                    <li className="mb-5"><strong>Layer-2</strong></li>
                                    <li>Bridget</li>
                                    <li>Explorer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;