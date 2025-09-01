  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) → 

DDIC - Table Types

A [DDIC table type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_type_glosry.htm "Glossary Entry") defines the data type of an [internal table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm "Glossary Entry") in ABAP. The DDIC table type defines the following in an internal table:

-   [Line type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrow_type_glosry.htm "Glossary Entry")
-   The [table category](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_category_glosry.htm "Glossary Entry")
-   The [table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_key_glosry.htm "Glossary Entry")

A program-internal object declared with reference to a table type is an internal table of this type.

-   [Technical attributes of table types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_types_tech.htm)
-   [Semantic attributes of table types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_types_sema.htm)

Hints

-   Unlike in [data elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_elements.htm) and [DDIC structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures.htm), the DDIC table types exist only to create globally visible definitions of internal tables. DDIC table types replace the definition of internal tables in [type pools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_pool_glosry.htm "Glossary Entry") and can themselves be replaced using the declaration of internal table types in global classes and interfaces (if the context where the type is required is suitable). The attributes of an internal table that can be defined in the ABAP Dictionary match those that can be specified using the statement [TYPES ... TABLE OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_itab.htm) in ABAP programs completely. For more information, see the in-depth documentation about [internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) in the ABAP programming language.
-   The name of a table type must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_types_names.htm).

Example

The table type SPFLI\_KEY\_TAB describes a hashed table with the structured line type SPFLI with a unique primary key and two non-unique secondary table keys.

Continue
[DDIC - Technical Attributes of Table Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_types_tech.htm)
[DDIC - Semantic Attributes of Table Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_types_sema.htm)
[DDIC - Ranges Table Type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_types_ranges.htm)