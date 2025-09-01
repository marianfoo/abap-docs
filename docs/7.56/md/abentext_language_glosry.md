  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

text language

Label of a component of type LANG of a [structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_glosry.htm "Glossary Entry") defined in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") or in a [DDIC database table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_db_table_glosry.htm "Glossary Entry"). Only one component of this type can be labeled as the text language. The text language is used when the structure is passed between [MDMP systems](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunicode_system_glosry.htm "Glossary Entry") for the conversion of character-like components by the statement [IMPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenimport_text_language.htm) or by TABLES parameters with the binary [RFC protocol](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_protocol.htm). Furthermore, the text language can influence which lines of a database table are transported by the [Change and Transport System](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencts_glosry.htm "Glossary Entry"). Depending on settings in the CTS, only entries in the original language of the database table can be transported.