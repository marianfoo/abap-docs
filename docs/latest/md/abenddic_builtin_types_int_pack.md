  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - General Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_general.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Integers%2C%20Packed%20Numbers%2C%20Binary%20Floating%20Point%20Numbers%2C%20ABENDDIC_BUILTIN_TYPES_INT_PACK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Integers, Packed Numbers, Binary Floating Point Numbers

The following dictionary data types are available to describe numeric types, except for decimal floating point numbers:

-   [INT1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for [integer numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninteger_number_glosry.htm "Glossary Entry")
    
    These types describe general 1-byte, 2-byte, 4-byte, and 8-byte integers. The dictionary types INT1 and INT2 are assigned to the ABAP types [b](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm) and [s](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm). These ABAP types cannot be specified either statically or dynamically in ABAP statements. They can only be used in ABAP programs by reference to the built-in dictionary types INT1 and INT2.
    
-   [DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for [packed numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpacked_number_glosry.htm "Glossary Entry")
    
    This type describes general packed numbers in [BCD format](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbcd_glosry.htm "Glossary Entry"). When used, a length and the number of decimal places must be added to the type. The number of decimal places must be less than or equal to the length and cannot exceed 14.
    
-   [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for [binary floating point numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbinfloat_glosry.htm "Glossary Entry")
    
    This type describes general binary floating point numbers. Table fields of this type cannot be used as [key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_key.htm) of DDIC database tables.
    

Hints

-   When defining data types based on the built-in type DEC, an odd number of places should be used. These values are stored in [BCD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbcd_glosry.htm "Glossary Entry") format, for which in ABAP (data type p), only an odd number of digits is possible, since a half byte is used for the sign. If a data type DEC has an even number of characters, the length of the associated ABAP type p is rounded up and hence contains the next highest odd number of places. This can cause overflows and exceptions when writing to DDIC database tables. The same applies to the built-in types CURR, DF34\_DEC, DF16\_DEC, and QUAN, which are handled technically like the type DEC,
-   If the built-in dictionary types INT1, INT2, INT4, and INT8 are [used](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_type_usage.htm) for typing, the number of places must usually be specified explicitly as 2, 5, 10, and 19. If the type FLTP is used, 16 places and the same number of decimal places must be specified. However, the specified number of places does not have any effect on the data types. By default, they describe platform-dependent integers or binary floating point numbers and occupy 1, 2, 4, or 8 bytes.
    
    -   In the case of integer types, the specified places express the possible decimal places without sign.
    -   In the case of binary floating point numbers, 16 expresses the approximate precision of the IEEE-754 (double precision) standard.
    
    The specified places are saved in the metadata of a user-defined type and are evaluated, if necessary, by special frameworks.
    
-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm) can be predefined for the numeric types specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.
-   If a [dynpro field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") has one of the built-in numeric types, the output of a sign must be defined in a [domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) so that negative values can be represented.