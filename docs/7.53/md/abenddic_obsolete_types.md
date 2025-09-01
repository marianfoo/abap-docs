  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) → 

Obsolete Dictionary Types

The following built-in data types in ABAP Dictionary are obsolete and should no longer be used:

-   The data types [DF16\_SCL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and [DF34\_SCL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_decimal_floating_point.htm) with scaling are obsolete and their use is strongly discouraged.

-   The data type [PREC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) is obsolete and should no longer be used. In ABAP Dictionary and in ABAP programs, it is handled like INT2, despite the predefined length (2). The length 2 is relevant only for dynpro fields of the type PREC, which can have two-character positive values at most. The property sign cannot be set for a domain of the type PREC

-   The data type [VARC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) is obsolete and cannot be used for new definitions. It was previously used for character strings with variable lengths. Existing data types with this built-in type can still be used. When table fields with this type are used in ABAP SQL, the same [restrictions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_character_byte_types.htm) apply as to fields with the types STRING and RAWSTRING plus LCHR and LRAW.