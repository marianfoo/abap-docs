  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) → 

ABAP - Rules for Strict ABAP

ABAP developments in modern environments as e.g. in the [SAP BTP ABAP environment](javascript:call_link\('abensap_btp_glosry.htm'\) "Glossary Entry") or [S/4HANA Cloud ABAP environment](javascript:call_link\('abens4_hana_cloud_abap_env_glosry.htm'\) "Glossary Entry") for cloud developments or when developing enhancements for apps as a key user are done in [strict ABAP](javascript:call_link\('abenstrict_abap_glosry.htm'\) "Glossary Entry"). Compared to [classic ABAP](javascript:call_link\('abenclassic_abap_glosry.htm'\) "Glossary Entry"), ABAP development in a [strict ABAP development environment](javascript:call_link\('abenstrict_abap_dev_envir_glosry.htm'\) "Glossary Entry") is restricted as follows:

-   Only one of the [restricted ABAP language versions](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") can be used:
    
    -   [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry") or
    -   [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry").
    
    The topic [Language Elements in ABAP Versions](javascript:call_link\('abenrestricted_abap_elements.htm'\)) provides an overview of the ABAP language elements that are allowed in these language versions compared to [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry").
    
-   Only [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that are [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") for the respective [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") can be used.
    
    The topic [Released APIs](javascript:call_link\('abenreleased_apis.htm'\)) provides an overview of the released APIs of the current system.
    
-   Only [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") or special enhancement tools can be used.

The stability of released APIs is governed by [release contracts](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry"). Accesses to released APIs must be done in such a way that they are stable against allowed changes in the APIs. The topic [Working with Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) gives an overview of the according rules.

Continue
[Language Elements in ABAP Versions](javascript:call_link\('abenrestricted_abap_elements.htm'\))
[Released APIs](javascript:call_link\('abenreleased_apis.htm'\))
[Working with released APIs](javascript:call_link\('abenrestricted_apis.htm'\))