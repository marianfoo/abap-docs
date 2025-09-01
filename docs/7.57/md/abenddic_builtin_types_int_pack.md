  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Integers, Packed Numbers, Binary Floating Point Numbers, ABENDDIC_BUILTIN_TYPE
S_INT_PACK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Integers, Packed Numbers, Binary Floating Point Numbers

The following types are used for general descriptions of the numeric types (except for decimal floating point numbers):

-   [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) for [integer numbers](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")
    
    These types describe general 1-byte, 2-byte, 4-byte, and 8-byte integers. The ABAP types [b](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), assigned to the types INT1 and INT2, cannot be specified either statically or dynamically in ABAP statements. These types only occur in ABAP programs, by reference to the types INT1 and INT2 from ABAP Dictionary.
    
-   [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) for [packed numbers](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry")
    
    This type describes general packed numbers in [BCD format](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry"). When used, a length and the number of decimal places must be added to the type. The number of decimal places must be less than or equal to the length and cannot exceed 14.
    
-   [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)) for [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry")
    
    This type describes general binary floating point numbers. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of DDIC database tables.
    

Hints

-   An odd number of places should be used in the definition of data types based on the built-in type DEC. These values are stored in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format, for which in ABAP (data type p), only an odd number of digits is possible, since a half byte is used for the sign. If a data type DEC has an even number of characters, however, the length of the associated ABAP type p is rounded up and hence contains the next highest odd number of places. This can cause overflows and exceptions when writing to DDIC database tables. The same applies to the built-in types CURR, DF34\_DEC, DF16\_DEC, and QUAN, which are handled technically like the type DEC.
-   If the built-in types INT1, INT2, INT4, and INT8 are [used](javascript:call_link\('abenddic_builtin_type_usage.htm'\)) to specify types, the number of places must usually be specified as 2, 5, 10, and 19. If the type FLTP is used, 16 places and the same number of decimal places must be specified. The specified number of places is generally ignored by the data types. By default, they describe platform-dependent integers or binary floating point numbers and occupy 1, 2, 4, or 8 bytes.
    
    -   In the case of integer types, the specified places express the possible decimal places without sign.
    -   In the case of binary floating point numbers, 16 expresses the approximate precision of the IEEE-754 (double precision) standard.
    
    The specified places are saved in the metadata of a self-defined type and are evaluated, if necessary, by special frameworks.
    
-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) can be predefined for the numeric types specific to each user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.
-   If a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") has one of the built-in numeric types, the output of a sign must be defined in a [domain](javascript:call_link\('abenddic_domains.htm'\)) so that negative values can be represented.