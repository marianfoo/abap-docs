# ABAP - Keyword Documentation / ABAP - Rules for ABAP Cloud / Contract Rules for ABAP Released APIs / C2 Contract Rules

Included pages: 4


### abenc2_contract_rules.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C2%20Contract%20Rules%2C%20ABENC2_CONTRACT_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C2 Contract Rules

In [ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cloud_glosry.htm "Glossary Entry"), the language version [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry") must be used, where access to [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry") is restricted to [released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreleased_api_glosry.htm "Glossary Entry").

The [C2 contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_contract_glosry.htm "Glossary Entry") is the [release contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelease_contract_glosry.htm "Glossary Entry") that is crucial for remote access to APIs from external consumers. The following topics list the most important rules that must be obeyed by API providers and API consumers.

-   [C2 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_provider_rules.htm)

Continue
[C2 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_provider_rules.htm)


### abenc2_provider_rules.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C2 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_contract_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C2%20Contract%20Rules%20for%20API%20Providers%2C%20ABENC2_PROVIDER_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C2 Contract Rules for API Providers

Generally, a repository object that is classified with the C2 contract must not be deleted after being released as an API but can become deprecated.

The following sections show the most important rules that a C2 contract imposes on different kinds of repository objects.

-   [C2 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_provider_rules_cds_type.htm)

Continue
[C2 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_provider_rules_cds_type.htm)


### abenc2_provider_rules_cds_type.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C2 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_contract_rules.htm) →  [C2 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C2%20Contract%20Rules%20for%20Providing%20CDS%20Types%2C%20ABENC2_PROVIDER_RULES_CDS_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

C2 Contract Rules for Providing CDS Types

The rules for releasing a [CDS user-defined type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") with the C2 contract are the same as the C1 contract rules for providing types, see topic [C1 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds_type.htm).


### abenc2_provider_rules.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C2 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_contract_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C2%20Contract%20Rules%20for%20API%20Providers%2C%20ABENC2_PROVIDER_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C2 Contract Rules for API Providers

Generally, a repository object that is classified with the C2 contract must not be deleted after being released as an API but can become deprecated.

The following sections show the most important rules that a C2 contract imposes on different kinds of repository objects.

-   [C2 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_provider_rules_cds_type.htm)

Continue
[C2 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc2_provider_rules_cds_type.htm)
