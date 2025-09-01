  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

DDIC - Type Pools

A type pool is an ABAP program managed by ABAP Dictionary that is initiated by the statement [TYPE-POOL](javascript:call_link\('abaptype-pool.htm'\)) and that contains ABAP statements for defining globally visible [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry"), [constants](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), and [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry"). More information about type pools can be found under [ABAP Program Types](javascript:call_link\('abenprogram_type_oview.htm'\)) and under the statement [TYPE-POOL](javascript:call_link\('abaptype-pool.htm'\)). A type pool and its types, constants, and macros do not have any semantic attributes except a short text and any [comments](javascript:call_link\('abencomment_glosry.htm'\) "Glossary Entry") in the source code. The name of a type pool can have a maximum of five characters, can contain only letters, numbers, and underscores, and must start with a letter.

Hints

-   Types in type pools are the predecessors for general type definitions in ABAP Dictionary, which include reference types and table types alongside elementary data types.

-   Since it is possible to also define data types and constants in the public visibility section of global [classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") or in [interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry"), type pools are obsolete and should no longer be created. Existing type pools can still be used.

-   One drawback of type pools are their missing semantic attributes when compared to the other dictionary objects. These attributes can also be defined in global classes.

-   The name of a type pool can also be prefixed with a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry") (/.../) of a [prefix namespace](javascript:call_link\('abenprefix_name_space_glosry.htm'\) "Glossary Entry"). This prefix can have a maximum of four characters.

Example

One type pool often used in ABAP programs is ABAP itself, which contains many low-level types and constants. The drawback of this type pool is that the entire type pool must be loaded, even if only a few types and constants are needed, such as the type abap\_bool and the associated constants abap\_true and abap\_false.