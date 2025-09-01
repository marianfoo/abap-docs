  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Table Types](javascript:call_link\('abenddic_table_types.htm'\)) → 

DDIC - Ranges Table Type

A ranges table type is a table type for a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). A ranges table is a standard table with a standard key and a specially structured line type and can be used in general logical expressions with the relational expression [IN range tab](javascript:call_link\('abenlogexp_select_option.htm'\)) or used after WHERE in ABAP SQL with the relational expression [IN range tab](javascript:call_link\('abenwhere_logexp_seltab.htm'\)). In ABAP Dictionary, ranges table types are created in the same way as with the statement [TYPES ... RANGE OF](javascript:call_link\('abaptypes_ranges.htm'\)).

The data types of the components SIGN and OPTION are the data elements DDSIGN and DDOPTION. The data type for the components LOW and HIGH must be elementary and can be specified directly as a [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) or using a [data element](javascript:call_link\('abenddic_data_elements.htm'\)).

The structure of the ranges table must be a standalone DDIC structure. When a ranges table type is defined, it can be created from the types specified for the components LOW and HIGH.

Hints

-   In ABAP programs, ranges tables can also be defined with reference to data types other than elementary data types.

-   In ABAP programs, the structure of a ranges table does not need to be a standalone structure.