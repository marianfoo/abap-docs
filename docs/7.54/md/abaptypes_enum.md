  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm) → 

TYPES - BEGIN OF ENUM enum\_type

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_begin_of_enum_shortref.htm)

Syntax

TYPES BEGIN OF ENUM enum\_type
              *\[*STRUCTURE struc*\]*
              *\[*BASE TYPE dtype*\]*.
  TYPES val1 *\[*VALUE IS INITIAL*\]*,
  TYPES val2 *\[*VALUE val*\]*,
  TYPES val3 *\[*VALUE val*\]*,
  ...
TYPES END OF ENUM enum\_type
            *\[*STRUCTURE struc*\]*.

Extras:

[1\. ... STRUCTURE struc](#!ABAP_ADDITION_1@1@)
[2\. ... BASE TYPE dtype](#!ABAP_ADDITION_2@2@)
[3\. ... VALUE *{*IS INITIAL*}**|*val](#!ABAP_ADDITION_3@3@)

Effect

Definition of an [enumerated type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry") enum\_type. An enumerated type describes [enumerated variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_variable_glosry.htm "Glossary Entry"), that is, elementary data objects that can only accept particular [enumerated values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_value_glosry.htm "Glossary Entry"). These values are defined as a value set in the form of [enumerated constants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") val1, val2, and so on in the definition of the enumerated type. Enumerated variables and enumerated constants are both [enumerated objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

The statements for defining an enumerated type are introduced with a TYPES BEGIN OF ENUM statement and end with a TYPES END OF ENUM statement. Between these are TYPES statements for defining the value set of the enumerated type. At least one enumerated value must be defined. No other statements are allowed.

The definition of an enumerated type comprises the following:

-   Name enum\_type.
    

The enumerated type, like any data type defined with TYPES, can be used with its name enum\_type, for example, after a TYPE addition or in suitable [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expressions.htm). It acts as a full type in [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping.htm) of field symbols or current parameters.

-   Base type
    

The [base type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbase_type_glosry.htm "Glossary Entry") determines the data type of the enumerated constants in the value set of the enumerated type and the technical type of enumerated variables.

-   If the BASE TYPE addition is not specified, the default base type is i.

-   The BASE TYPE addition can be used to explicitly define the base type; all flat elementary data types no longer than 16 bytes can be specified for dtype.

-   Enumerated constants
    

Each enumerated value val1, val2, and so on is declared by a separate TYPES statement. These, however, do not define a data type, but an enumerated constant that contains the enumerated value. The data type of each constant is the enumerated type enum. The technical data type for the enumerated value is the base type. Each name val1, val2 , and so on must adhere strictly to the [naming conventions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennaming_conventions.htm).

-   If the STRUCTURE addition is not specified, each enumerated constant is a separate data object with the respective name val1, val2, and so on. The enumerated constants are declared in the namespace and validity area of the current context (procedure, class, program), and each name must be unique within the enumerated type as well as in the entire current context.

-   The STRUCTURE addition generates a constant structure struc with the components val1, val2, and so on as the [enumerated structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") in the current context. The enumerated values are saved in the components of this structure.

The individual enumerated constants and the constant enumerated structure can be [used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_types_usage.htm) in particular reading positions. In classes they belong (like all constants) to the static attributes and can be addressed accordingly using the component selectors \=> and \->.

-   Enumerated values
    

The enumerated values (the content of the enumerated constants) are determined as follows:

-   If the VALUE addition is not specified, the base type must be numeric and the enumerated constants val1, val2, and so on are filled with the enumerated values 0, 1, and so on, from left to right.

-   The VALUE addition assigns explicit type-friendly enumerated values to the enumerated constants. The addition must be specified either for all or for none of the enumerated constants val1, val2, and so on. The IS INITIAL addition must be specified for exactly one constant. Each enumerated value must be unique within the enumerated type. The order of the specified values is of no importance. For non-numeric base types, the VALUE addition must be specified for each enumerated constant.

Special [conversion rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_enumerated.htm) apply to enumerated types to ensure that only the enumerated values defined in the enumerated type can be assigned to an [enumerated variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_variable_glosry.htm "Glossary Entry").

Notes

-   If STRUCTURE is not specified, an elementary type enum is declared, and a single data object is declared for each enumerated value of the value set. Each TYPES statement for defining an enumerated value val has a similar effect to a declaration.
    

CONSTANTS val TYPE enum\_type VALUE ...

-   An enumerated type is always an elementary data type and belongs to the generic type [simple](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm). Likewise, the associated type description class CL\_ABAP\_ENUMDESCR is a subclass of CL\_ABAP\_ELEMDESCR.
    
-   The statements for defining an enumerated type are usually summarized in a [chained statement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchained_statement_glosry.htm "Glossary Entry").
    
-   Enumerated types are currently only supported in the ABAP language:
    

-   Enumerated types cannot currently be defined globally in ABAP Dictionary. Permitted values cannot currently be imported directly from database tables.

-   Enumerated types are not currently supported by classic [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry").

-   In a [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry"), the names of the enumerated constants, as well as the type name enum\_type, must have the name of the type group as a prefix.
    
-   For more information about usage, see [enumerated objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_types_usage.htm).
    

Example

Definition of an enumerated type planet without using optional additions. The base type is i and the enumerated values of the enumerated constants mercury, venus, .and so on are 0 to 7. The enumerated variable planet is declared with the enumerated type planet. It can only be assigned the enumerated values defined in the enumerated type.

TYPES:
  BEGIN OF ENUM planet,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  END OF ENUM planet.
DATA planet type planet.
planet = earth.
cl\_demo\_output=>display( planet ).

Example

The enumerated type number comprises the same value set as the fixed values of the domain S\_NUMBERS. This is checked by the assignment of each domain fixed value to an enumerated variable number of the enumerated type number. The necessary [conversions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconv_constructor_enum.htm) are performed.

TYPES:
  BEGIN OF ENUM number,
    n0, n1 , n2 , n3, n4, n5, n6, n7, n8, n9,
  END OF ENUM number.
DATA doma\_values TYPE TABLE OF dd07v.
CALL FUNCTION 'DD\_DOMVALUES\_GET'
  EXPORTING
    domname   = 'S\_NUMBERS'
  TABLES
    dd07v\_tab = doma\_values.
TRY.
    LOOP AT doma\_values INTO DATA(doma\_value).
      DATA(number) =  CONV number( CONV i( doma\_value-domvalue\_l ) ).
    ENDLOOP.
  CATCH cx\_sy\_conversion\_no\_enum\_value.
    cl\_demo\_output=>display(
      |{ doma\_value-domvalue\_l } does not match| ).
ENDTRY.

Addition 1

... STRUCTURE struc

Effect

If the STRUCTURE addition is specified, a separate enumerated constant is not created for each enumerated value val1, val2, and so on. Instead, a constant [enumerated structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") struc is declared in the namespace and validity area of the current context (procedure, class, program). The TYPES statements for the enumerated values val1, val2, and so on define the components of the structure in the order they appear. They have the names val1, val2, and so on, and each has the enumerated type enum. The components of the structure are special [enumerated objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

Notes

If STRUCTURE is specified, an elementary type enum and a structured data object struc are declared. As regards the structure, the TYPES statement has the following effect:

CONSTANTS:
  BEGIN OF struc,
    val1 TYPE enum\_type VALUE ...
    val2 TYPE enum\_type VALUE ...
    val3 TYPE enum\_type VALUE ...
    ...
  END OF struc.

-   If STRUCTURE is specified, the enumerated values of the enumerated type can be addressed using struc-val1, struc-val2, and so on. Also, the structure can be addressed as a whole, with the rules for structures whose components have enumerated types.
    
-   The enumerated type enum is an elementary type, even if STRUCTURE is specified.
    
-   In a [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry"), the name of the enumerated structure, as well as the type name enum\_type, must have the name of the type group as a prefix. This is not necessary for the components.
    

Example

Definition of an enumerated type planet using the optional STRUCTURE addition. A constant enumerated structure p, which can be addressed in the program, is declared with the components mercury, venus, and so on with the base type i and the enumerated values 0 to 7. The enumerated variable planet is declared with the enumerated type planet. It can only be assigned the enumerated values declared in the enumerated type.

TYPES:
  BEGIN OF ENUM planet STRUCTURE p,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  END OF ENUM planet STRUCTURE p.
DATA planet type planet.
planet = p-earth.
cl\_demo\_output=>write( planet ).
cl\_demo\_output=>display( p ).

Addition 2

... BASE TYPE dtype

Effect

The BASE TYPE addition defines an explicit base type dtype for the enumerated values of the value set of the enumerated type enum. All built-in and self-defined flat elementary data types no longer than 16 bytes can be specified. This includes the following [built-in ABAP types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) and all [dictionary types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_intro.htm) that are mapped to them:

-   All [numeric types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm)
    
-   The [character-like types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm) c and n with a maximum length of 8, but no text strings
    
-   the [byte-like type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm) x with a maximum length of 16, but no byte strings
    
-   The [date types and time types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm)
    

If the BASE TYPE addition is not specified, the base type i is used.

Notes

-   The base type describes how each enumerated value of the value set is saved internally, but it is not the type of the associated enumerated constant that can be used in a program. Its type is the enumerated type enum itself.
    
-   If an explicitly specified base type is not numeric, the VALUE addition must be used for each enumerated value of the value set.
    
-   The explicit definition of a base type other than i is usually unnecessary.
    
-   To access an enumerated value of the value set in accordance with its representation in the base type, the conversion operator CONV can be used.
    

Example

Declaration of an enumerated type bool in a class boolean with explicit specification of the base type ABAP\_BOOL from the type group ABAP. Unlike a variable of type ABAP\_BOOL, an enumerated variable of type boolean=>bool can only accept the enumerated values ABAP\_TRUE and ABAP\_FALSE. However, it is not necessary to specify the base type explicitly in this example. The demonstrated usage of the class would also work with the implicit base type i.

CLASS boolean DEFINITION.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF ENUM bool BASE TYPE abap\_bool,
        false VALUE IS INITIAL,
        true  VALUE abap\_true,
      END OF ENUM bool.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main
      IMPORTING p           TYPE any
      RETURNING VALUE(bool) TYPE boolean=>bool.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    bool = COND #( WHEN p IS INITIAL THEN boolean=>false
                                     ELSE boolean=>true ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  IF demo=>main( 1 ).
    cl\_demo\_output=>write( |True| ).
  ENDIF.
  IF NOT demo=>main( ' ' ).
    cl\_demo\_output=>write( |False| ).
  ENDIF.
  cl\_demo\_output=>display( ).

Addition 3

... VALUE *{*IS INITIAL*}**|*val

Effect

The VALUE addition can be used to assign explicit enumerated values to the enumerated constants val1, val2, and so on of the value set of the enumerated type enum. The VALUE addition must be specified either for all or for none of the enumerated constants. IS INITIAL must be specified for exactly one enumerated constant. An enumerated value val that matches the base type should be specified for all other enumerated constants.

-   If the base type is numeric, VALUE can be specified.
    
-   If the base type is not numeric, VALUE must be specified.
    

For the VALUE addition, the same applies as for the [CONSTANTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconstants.htm) and [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm) statements:

-   IS INITIAL generates the initial value of the base type.
    
-   val can either be specified as a literal or as a predefined constant.
    

Each enumerated value can only occur once within the value set of an enumerated type. If the VALUE addition is not specified, the enumerated values of the value set are set to 0, 1, 2, and so on, from left to right. If it is specified explicitly, the enumerated values do not have to be in size order.

Example

In the following enumerated type the planets are in alphabetical order. The explicit assignment of enumerated values, however, corresponds to their order in the solar system. Accordingly, the logical expression after ASSERT is true. The order of the components of the structure p, on the other hand, corresponds to the order of definition. The enumerated value is determined using the conversion operator [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconv_constructor_enum.htm), to which a special rule applies in this case.

TYPES:
  BEGIN OF ENUM planet STRUCTURE p,
    earth   VALUE 20,
    jupiter VALUE 40,
    mars    VALUE 30,
    mercury VALUE IS INITIAL,
    neptune VALUE 70,
    saturn  VALUE 50,
    uranus  VALUE 60,
    venus   VALUE 10,
  END OF ENUM planet STRUCTURE p.
ASSERT p-mercury < p-venus   AND
       p-venus   < p-earth   AND
       p-earth   < p-mars    AND
       p-mars    < p-jupiter AND
       p-jupiter < p-saturn  AND
       p-saturn  < p-uranus  AND
       p-uranus  < p-neptune.
DATA(subrc) = 0.
WHILE subrc = 0.
  ASSIGN COMPONENT sy-index OF STRUCTURE p TO FIELD-SYMBOL(<fs>).
  subrc = sy-subrc.
  cl\_demo\_output=>write(
    |Name:  { <fs> && \`,\` WIDTH = 8 } Value: { CONV i( <fs> ) }| ).
ENDWHILE.
cl\_demo\_output=>display( ).