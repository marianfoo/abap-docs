  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

Obsolete Dictionary Types

The following predefined data types in ABAP Dictionary are obsolete and should no longer be used:

-   The data types [DF16\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) for [decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) with scaling are obsolete and their use is strongly discouraged.

-   The data type [PREC](javascript:call_link\('abenddic_builtin_types.htm'\)) is obsolete and should no longer be used. In ABAP Dictionary and in ABAP programs, it is handled like INT2 despite the predefined length, 2. The length 2 is relevant only for dynpro fields of the type PREC, which can have two-character positive values at most. The property sign cannot be set for a domain of the type PREC

-   The data type [VARC](javascript:call_link\('abenddic_builtin_types.htm'\)) is obsolete and cannot be used for new definitions. It was previously used for character strings with variable lengths. Existing data types with this predefined type can still be used. When table fields with this type are used in Open SQL, the same [restrictions](javascript:call_link\('abenddic_character_byte_types.htm'\)) apply as to fields with the types STRING and RAWSTRING plus LCHR and LRAW.