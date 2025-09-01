  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

check indicator

Indicates whether an [authorization object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_object_glosry.htm "Glossary Entry") is checked by an [authorization check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_check_glosry.htm "Glossary Entry") in a certain context, for example a [transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry"). Check indicators for authorization objects are defined at SAP using the transaction SU22 and in customer systems using the transaction SU24. Check indicators can have the statuses check and do not check, where check is given a proposal status with the values "empty" (not yet set), "yes", and "no". The changes made in transaction SU22 have the role of proposal values in customer systems and can be passed to transaction SU24 using transaction SU25.