  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20check%20indicator%2C%20ABENCHECK_INDICATOR_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

check indicator

Indicates whether an [authorization object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_object_glosry.htm "Glossary Entry") is checked by [authorization check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_check_glosry.htm "Glossary Entry") in a certain context, for example a [transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransaction_glosry.htm "Glossary Entry"). Check indicators for authorization objects are defined at SAP by the transaction SU22 and in customer systems by the transaction SU24. Check indicators can have the statuses check and do not check, where check is given a proposal status with the values empty (not yet set), yes, and no. The changes made in transaction SU22 have the role of proposal values in customer systems and can be passed to transaction SU24 with transaction SU25.