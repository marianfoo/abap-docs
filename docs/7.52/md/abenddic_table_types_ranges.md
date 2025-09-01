  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Table Types](javascript:call_link\('abenddic_table_types.htm'\)) → 

Ranges Table Type

A ranges table type is a table type for a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). A ranges table is a standard table with a standard key and a specially structured row type for use in a general logical expression with the relational expression [IN seltab](javascript:call_link\('abenlogexp_select_option.htm'\)) or after WHERE in Open SQL with the relational expression [IN seltab](javascript:call_link\('abenwhere_logexp_seltab.htm'\)). In ABAP Dictionary, ranges table types are created using the statement [TYPES ... RANGE OF](javascript:call_link\('abaptypes_ranges.htm'\)).

The data types of the components SIGN and OPTION are the data elements DDSIGN and DDOPTION. The data type for the components LOW and HIGH must be elementary and can be specified directly as a [predefined data type](javascript:call_link\('abenddic_builtin_types.htm'\)) or using [data element](javascript:call_link\('abenddic_data_elements.htm'\)).

The structure of the ranges table must be a standalone structure in ABAP Dictionary. When a ranges table type is defined, it can be created from the types specified for the components LOW and HIGH.

Notes

-   In ABAP programs, ranges tables can also be defined with reference to data types other than elementary data types.

-   In ABAP programs, the structure of a ranges table does not need to be a standalone structure.