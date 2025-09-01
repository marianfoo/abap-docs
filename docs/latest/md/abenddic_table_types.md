  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Types%2C%20ABENDDIC_TABLE_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Table Types

A [DDIC table type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_type_glosry.htm "Glossary Entry") defines the data type of an [internal table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry") in ABAP. The DDIC table type defines the following in an internal table:

-   [Line type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrow_type_glosry.htm "Glossary Entry")
-   The [table category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_category_glosry.htm "Glossary Entry")
-   The [table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_key_glosry.htm "Glossary Entry")

A program-internal object declared with reference to a table type is an internal table of this type.

-   [Technical properties of table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_tech.htm)
-   [Semantic properties of table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_sema.htm)

Hints

-   Unlike [data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) and [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm), the sole purpose of DDIC table types is to create globally visible definitions of internal tables. DDIC table types replace the definition of internal tables in [type pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry"). DDIC table types can themselves be replaced by the declaration of internal table types in global classes and interfaces, if the context is suitable. The properties of an internal table that can be defined in the ABAP Dictionary completely match those that can be specified using the statement [TYPES ... TABLE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_itab.htm) in ABAP programs. For more information, see the in-depth documentation about [internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) in the ABAP programming language.
-   The name of a table type must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm).

Example

The table type SPFLI\_KEY\_TAB describes a hashed table with the structured line type SPFLI with a unique primary key and two non-unique secondary table keys.

Continue
[DDIC - Technical Properties of Table Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_tech.htm)
[DDIC - Semantic Properties of Table Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_sema.htm)
[DDIC - Ranges Table Type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_ranges.htm)