  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: check indicator, ABENCHECK_INDICATOR_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

check indicator

Indicates whether an [authorization object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") is checked by [authorization check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_check_glosry.htm "Glossary Entry") in a certain context, for example a [transaction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_glosry.htm "Glossary Entry"). Check indicators for authorization objects are defined at SAP by the transaction SU22 and in customer systems by the transaction SU24. Check indicators can have the statuses check and do not check, where check is given a proposal status with the values "empty" (not yet set), "yes", and "no". The changes made in transaction SU22 have the role of proposal values in customer systems and can be passed to transaction SU24 with transaction SU25.