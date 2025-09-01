---
title: "transactional_contract_glosry"
description: |
  transactional_contract_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactional_contract_glosry.htm"
abapFile: "abentransactional_contract_glosry.htm"
keywords: ["do", "if", "try", "class", "data", "abentransactional", "contract", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20transactional%20contract%2C%20ABENTRANSACTIONAL_CONTRACT_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

transactional contract

Specifies which ABAP statements and operations are allowed and which are not allowed in a [transactional phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentr_phase_glosry.htm "Glossary Entry"). The following transactional contracts are available, each of which specifies restrictions to ensure transactional consistency: SAVE, MODIFY, FUNCTIONAL, SURFACE, READ, COMPLETE. The SAVE and MODIFY contracts are implicitly enabled in both transactional phases.

The transactional contracts can be set explicitly by [API classifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapapi_classification.htm) (starting with IF\_ABAP\_TX..., for example, IF\_ABAP\_TX\_SAVE). In the [controlled SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrolled_sap_luw_glosry.htm "Glossary Entry") and when in a transactional context, transactional contracts are checked.

For example, an API contains database changes and has the classification IF\_ABAP\_TX\_SAVE. The classification ensures that the API is not called in the modify [transactional phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentr_phase_glosry.htm "Glossary Entry") by causing a violation that is either logged or results in a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry").