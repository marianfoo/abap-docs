  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) →  [DDIC - Table Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_types.htm) → 

DDIC - Ranges Table Type

A ranges table type is a table type for a [ranges table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranges_table_glosry.htm "Glossary Entry"). A ranges table is a standard table with a standard key and a specially structured line type and can be used in general logical expressions with the relational expression [IN range tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_select_option.htm) or used after WHERE in ABAP SQL with the relational expression [IN range tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_seltab.htm). In the ABAP Dictionary, ranges table types are created in the same way as with the statement [TYPES ... RANGE OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_ranges.htm).

The data types of the components SIGN and OPTION are the data elements DDSIGN and DDOPTION. The data type for the components LOW and HIGH must be elementary and can be specified directly as a [built-in data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) or using a [data element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_elements.htm).

The structure of the ranges table must be a standalone DDIC structure. When a ranges table type is defined, it can be created from the type specifications for the components LOW and HIGH.

Hints

-   In ABAP programs, ranges tables can also be defined with reference to data types other than elementary data types.
-   In ABAP programs, the structure of a ranges table does not need to be a standalone structure.