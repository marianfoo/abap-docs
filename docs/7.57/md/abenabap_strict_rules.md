  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP - Rules for Strict ABAP, ABENABAP_STRICT_RULES, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

ABAP - Rules for Strict ABAP

ABAP developments in modern environments as e.g. in the [SAP BTP ABAP Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_btp_glosry.htm "Glossary Entry") or [SAP S/4HANA Cloud ABAP Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abens4_hana_cloud_abap_env_glosry.htm "Glossary Entry") for cloud developments or when developing enhancements for apps as a key user are done in [strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstrict_abap_glosry.htm "Glossary Entry"). Compared to [classic ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclassic_abap_glosry.htm "Glossary Entry"), ABAP development in a [strict ABAP development environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstrict_abap_dev_envir_glosry.htm "Glossary Entry") is restricted as follows:

-   Only one of the [restricted ABAP language versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") can be used:
    
    -   [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry") or
    -   [ABAP for Key Users](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry").
    
    The topic [Language Elements in ABAP Versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_abap_elements.htm) provides an overview of the ABAP language elements that are allowed in these language versions compared to [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry").
    
-   Only [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") that are [released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry") for the respective [restricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") can be used or extended.
    
    The topic [Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_apis.htm) provides an overview of the released APIs of the current system.
    
-   Only [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") or special enhancement tools can be used.

The stability of released APIs is governed by [release contracts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelease_contract_glosry.htm "Glossary Entry"). Accesses to or extensions of released APIs must be done in such a way that they are stable against allowed changes in the APIs. The topic [Working with Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_apis.htm) gives an overview of the according rules.

Continue
[Language Elements in ABAP Versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_abap_elements.htm)
[Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_apis.htm)
[Contract Rules for Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_apis.htm)