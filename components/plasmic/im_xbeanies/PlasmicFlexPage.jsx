// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: 0XcyjVyUyT
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ImNotArtNav from "../../ImNotArtNav"; // plasmic-import: Xoe_b97VZI/component
import FlexPageHeader from "../../FlexPageHeader"; // plasmic-import: NlSaXhOoqK/component
import Uid from "../../Uid"; // plasmic-import: 7GW8h_hViQ/component
import VideoNft from "../../VideoNft"; // plasmic-import: bvKFXUs5yH/component
import SocialsText from "../../SocialsText"; // plasmic-import: XdrU4NtvKY/component
import Socials from "../../Socials"; // plasmic-import: lNF5F5pVlN/component
import MarketPlaces from "../../MarketPlaces"; // plasmic-import: sGix8KYNyE/component
import ImNotArtFooter from "../../ImNotArtFooter"; // plasmic-import: 1zyzTuVyET/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./PlasmicFlexPage.module.css"; // plasmic-import: 0XcyjVyUyT/css

export const PlasmicFlexPage__VariantProps = new Array();

export const PlasmicFlexPage__ArgProps = new Array("uIdInput");

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFlexPage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.root
        )}
      >
        {true ? (
          <ImNotArtNav
            data-plasmic-name={"imNotArtNav"}
            data-plasmic-override={overrides.imNotArtNav}
            className={classNames("__wab_instance", sty.imNotArtNav)}
          />
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"nftStack"}
            data-plasmic-override={overrides.nftStack}
            hasGap={true}
            className={classNames(projectcss.all, sty.nftStack)}
          >
            <FlexPageHeader
              data-plasmic-name={"flexPageHeader"}
              data-plasmic-override={overrides.flexPageHeader}
              className={classNames("__wab_instance", sty.flexPageHeader)}
            />

            {true ? (
              <Uid
                data-plasmic-name={"uid"}
                data-plasmic-override={overrides.uid}
                className={classNames("__wab_instance", sty.uid)}
                uIdInput={p.renderPlasmicSlot({
                  defaultContents: "00:po:97:p0",
                  value: args.uIdInput
                })}
              />
            ) : null}

            <VideoNft
              data-plasmic-name={"videoNft"}
              data-plasmic-override={overrides.videoNft}
              className={classNames("__wab_instance", sty.videoNft)}
            />
          </p.Stack>
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"socialStack"}
            data-plasmic-override={overrides.socialStack}
            hasGap={true}
            className={classNames(projectcss.all, sty.socialStack)}
          >
            <SocialsText
              data-plasmic-name={"socialsText"}
              data-plasmic-override={overrides.socialsText}
              className={classNames("__wab_instance", sty.socialsText)}
            />

            <Socials
              data-plasmic-name={"socials"}
              data-plasmic-override={overrides.socials}
              className={classNames("__wab_instance", sty.socials)}
            />

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"View on Marketplaces"}
                </span>
              </React.Fragment>
            </div>

            <MarketPlaces
              data-plasmic-name={"marketPlaces"}
              data-plasmic-override={overrides.marketPlaces}
              className={classNames("__wab_instance", sty.marketPlaces)}
            />
          </p.Stack>
        ) : null}
        {true ? (
          <ImNotArtFooter
            data-plasmic-name={"imNotArtFooter"}
            data-plasmic-override={overrides.imNotArtFooter}
            className={classNames("__wab_instance", sty.imNotArtFooter)}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "imNotArtNav",
    "nftStack",
    "flexPageHeader",
    "uid",
    "videoNft",
    "socialStack",
    "socialsText",
    "socials",
    "text",
    "marketPlaces",
    "imNotArtFooter"
  ],

  imNotArtNav: ["imNotArtNav"],
  nftStack: ["nftStack", "flexPageHeader", "uid", "videoNft"],
  flexPageHeader: ["flexPageHeader"],
  uid: ["uid"],
  videoNft: ["videoNft"],
  socialStack: [
    "socialStack",
    "socialsText",
    "socials",
    "text",
    "marketPlaces"
  ],

  socialsText: ["socialsText"],
  socials: ["socials"],
  text: ["text"],
  marketPlaces: ["marketPlaces"],
  imNotArtFooter: ["imNotArtFooter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFlexPage__ArgProps,
          internalVariantPropNames: PlasmicFlexPage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFlexPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFlexPage";
  } else {
    func.displayName = `PlasmicFlexPage.${nodeName}`;
  }
  return func;
}

export const PlasmicFlexPage = Object.assign(
  // Top-level PlasmicFlexPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    imNotArtNav: makeNodeComponent("imNotArtNav"),
    nftStack: makeNodeComponent("nftStack"),
    flexPageHeader: makeNodeComponent("flexPageHeader"),
    uid: makeNodeComponent("uid"),
    videoNft: makeNodeComponent("videoNft"),
    socialStack: makeNodeComponent("socialStack"),
    socialsText: makeNodeComponent("socialsText"),
    socials: makeNodeComponent("socials"),
    text: makeNodeComponent("text"),
    marketPlaces: makeNodeComponent("marketPlaces"),
    imNotArtFooter: makeNodeComponent("imNotArtFooter"),
    // Metadata about props expected for PlasmicFlexPage
    internalVariantProps: PlasmicFlexPage__VariantProps,
    internalArgProps: PlasmicFlexPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicFlexPage;
/* prettier-ignore-end */
