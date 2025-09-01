  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

lazy update

Procedure to create or update non-unique [secondary table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") in [internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_table_glosry.htm "Glossary Entry"). Non-unique secondary tables keys are not updated straight after insert operations using [INSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab.htm) or [APPEND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend.htm), a block operation in which the whole table body is filled at once, or after a modifying operation using [MODIFY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab.htm), [field symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_symbol_glosry.htm "Glossary Entry"), or [data references](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_glosry.htm "Glossary Entry"). They are updated at the next explicit usage. See also [direct update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendirect_update_glosry.htm "Glossary Entry") and [delayed update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendelayed_update_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key_secondary_update.htm)