# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Attributes of Data Objects / DESCRIBE

Included pages: 11


### abapdescribe.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) → 

DESCRIBE

Syntax Forms

[Field Properties](javascript:call_link\('abapdescribe_field.htm'\))
1\. DESCRIBE FIELD ...
[Properties of an Internal Table](javascript:call_link\('abapdescribe_table.htm'\))
2\. DESCRIBE TABLE ...
[Distance Between Two Fields](javascript:call_link\('abapdescribe_distance.htm'\))
3\. DESCRIBE DISTANCE ...

Effect

The variants of the statement DESCRIBE listed above can be used to specify some of the attributes displayed by data objects at runtime.

Notes

-   The statement DESCRIBE is used to determine the attributes of data objects of elementary data types. When DESCRIBE is used for structures or data objects of [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types like strings, internal tables, or reference variables, only elementary attributes can be identified. Additional information, for example the static or dynamic type of a reference, cannot be determined by DESCRIBE. For this kind of information, the type description classes of [runtime type services](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") (RTTS) should be used. These enable all data object attributes of all data types to be determined. Since the functions of the RTTS type description classes comprise the complete functions of the DESCRIBE statement, the system classes can be used instead of the statement.
    
-   The variant [DESCRIBE LIST](javascript:call_link\('abapdescribe_list.htm'\)) specifies the attributes of lists in the list buffer.
    

Continue
[DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\))
[DESCRIBE TABLE](javascript:call_link\('abapdescribe_table.htm'\))
[DESCRIBE DISTANCE](javascript:call_link\('abapdescribe_distance.htm'\))
[DESCRIBE - internal variant](javascript:call_link\('abendescribe_internal.htm'\))


### abapdescribe_field.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE FIELD

[Quick Reference](javascript:call_link\('abapdescribe_field_shortref.htm'\))

Syntax

DESCRIBE FIELD dobj
  *\[*TYPE typ *\[*COMPONENTS com*\]**\]*
  *\[*LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE*\]*
  *\[*DECIMALS dec*\]*
  *\[*OUTPUT-LENGTH olen*\]*
  *\[*HELP-ID hlp*\]*
  *\[*EDIT MASK mask*\]*.

Extras:

[1\. ... TYPE typ *\[*COMPONENTS com*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE](#!ABAP_ADDITION_2@2@)
[3\. ... DECIMALS dec](#!ABAP_ADDITION_3@3@)
[4\. ... OUTPUT-LENGTH olen](#!ABAP_ADDITION_4@4@)
[5\. ... HELP-ID hlp](#!ABAP_ADDITION_5@5@)
[6\. ... EDIT MASK mask](#!ABAP_ADDITION_6@6@)

Effect

This statement determines multiple attributes of the data object dobj and assigns them to the specified target fields. The following can be specified as target fields of each addition:

-   Existing variables to which the return value can be converted.
    
-   Inline declarations [DATA(var)](javascript:call_link\('abendata_inline.htm'\)).
    

The various additions make it possible to determine the data type and the number of components for structures, the length used in the memory, the number of [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry"), the output length, the name of the data type for a reference to a data element in ABAP Dictionary, and any conversion routines.

Notes

-   Field symbols or formal parameters can be specified in [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") for dobj to identify the attributes of the data object they represent when the statement is executed.
    
-   The statement DESCRIBE is used to determine the attributes of data objects of elementary data types. When DESCRIBE is used for structures or data objects of [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types like strings, internal tables, or reference variables, only elementary attributes can be identified. Further details, for example, the static or dynamic type of a reference variable cannot be identified using DESCRIBE. For this kind of information, the type description classes of runtime type services ([RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry")) should be used. These enable all data object attributes of all data types to be determined.
    

Addition 1

... TYPE typ *\[*COMPONENTS com*\]*

Effect

Determines the data type of the data object dobj. The return value is a single character character-like ID. In an inline declaration, a variable of the type c with length 1 is declared. The following tables list the assignment of return codes for all possible data types. The ID is case-sensitive.

Numeric Data Type

ID

b

b

s

s

i

I

int8

8

p

P

decfloat16

a

decfloat34

e

f

F

Character-Like Data Type

ID

c

C

n

N

string

g

Byte-Like Data Type

ID

x

X

xstring

y

Date Type/Time Type/Time Stamp Type

ID

d

D

t

T

utclong

p

Enumerated Type

ID

Enumerated type

k

Reference Type

ID

Data reference

l

Object reference

r

Complex Type

ID

Flat structure

u

Deep structure

v

Internal table

h

The addition COMPONENTS determines the number of direct components of the data object dobj. The return value is of type i. For an inline declaration, a variable of type i is declared. If the data object dobj is not a structure, the value 0 is returned. If dobj is a nested structure, only the components of the highest hierarchy level are counted.

Note

If DESCRIBE FIELD is applied directly to a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry"), its data type according to the above table is returned and not the internal ID j for the boxed component.

Example

For the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") nested structure struc1, identifies the type ID "v" and three components. For the [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structure struc2, identifies the type ID "u" and two components.

DATA: BEGIN OF struc1,
        comp1 TYPE c LENGTH 1,
        comp2 TYPE string,
        BEGIN OF struc2,
          comp1 TYPE c LENGTH 1,
          comp2 TYPE i,
        END OF struc2,
      END OF struc1.
DESCRIBE FIELD: struc1        TYPE DATA(typ1) COMPONENTS DATA(comp1),
                struc1-struc2 TYPE DATA(typ2) COMPONENTS DATA(comp2).

Addition 2

... LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE

Effect

Determines the length used directly by the data object dobj in the memory in bytes or characters depending on the addition MODE. The return value is of type i. For an inline declaration, a variable of type i is declared.

The variant with the addition IN BYTE MODE identifies the length of the data object dobj in bytes. The variant with the addition IN CHARACTER MODE identifies the length of the data object dobj in characters. When using IN CHARACTER MODE, the data type of dobj must be flat and character-like. For [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types, only IN BYTE MODE can be specified. This always identifies the length of the references involved (eight bytes for each reference).

Notes

-   For data objects with a fixed length, the length is determined that is specified when the data object is created. The [built-in function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") strlen can be used to identify the used length of character-like data objects while ignoring the trailing blanks.
    
-   In structures, the [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") are included in the length. This is particularly significant in the case of alignment gaps that occur before the end of the structure.
    
-   With [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry"), the addition IN BYTE MODE must be specified and the length of the actual [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") is determined in the [basic type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").
    

Example

Calculates the bytes required for the representation of one character. The result is greater than 1 in multi-byte systems.

DATA: text  TYPE c LENGTH 1,
      bytes TYPE i.
DESCRIBE FIELD text LENGTH DATA(blen) IN BYTE MODE.
DESCRIBE FIELD text LENGTH DATA(clen) IN CHARACTER MODE.
bytes = blen / clen.

Example

The result len of the following DESCRIBE statement is 9, not 10, due to a trailing alignment gap in struct.

DATA:
  BEGIN OF struct,
    text       TYPE c LENGTH 3,
    hex  TYPE x LENGTH 3,
  END OF struct.
DESCRIBE FIELD struct LENGTH DATA(len) IN BYTE MODE.

Addition 3

... DECIMALS dec

Effect

Determines the [number of decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") of the data object dobj. The return value is of type i. For an inline declaration, a variable of type i is declared.

Note

Only data objects of the data type p can have decimal places. Therefore, the result in dec can be different from 0 only for these data objects.

Example

Detects 0 decimal places and then 4 decimal places.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING pack TYPE p.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DESCRIBE FIELD pack DECIMALS DATA(dec).
    cl\_demo\_output=>write( dec ).
  ENDMETHOD.
ENDCLASS.
DATA:
  pack1 TYPE p LENGTH 8 DECIMALS 0,
  pack2 TYPE p LENGTH 8 DECIMALS 4.
START-OF-SELECTION.
  demo=>main( pack1 ).
  demo=>main( pack2 ).
  cl\_demo\_output=>display( ).

Addition 4

... OUTPUT-LENGTH olen

Effect

For data objects with a fixed length, determines the output length of the data object dobj required for [screen layouts](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"). The return value is of type i. For an inline declaration, a variable of type i is declared.

Generally, this result corresponds to the predefined output length of the data object in accordance with its data type in the output in the list buffer. In strings, olen is always set to 0. olen expects the data type i.

Notes

-   Normally, the required output length is specified adequately by the entry in the table for predefined [output lengths](javascript:call_link\('abenwrite_output_length.htm'\)). This is not the case when the data type of the data object is defined with a reference to ABAP Dictionary and an output length or a conversion routine is specified in the corresponding domain.
    
-   If the output length defined in a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") for a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") with the same name as dobj is shorter than the required output length, an overflow raises a non-handleable exception. When passed to the list buffer, the outputs are truncated if the output length is shorter than the required output length.
    
-   When separators or templates are provided in the user master record for the output of a data type, they are only displayed if the defined output length is sufficient. The required length can be longer than the output length identified by OUTPUT-LENGTH.
    
-   The output length for strings can be determined using the functions strlen or xstrlen.
    

Example

For date1, identifies the output length 8 associated with the type d. For date2, identifies the output length 10 defined in the domain SYDATS.

DATA: date1 TYPE d,
      date2 TYPE sy-datum.
DESCRIBE FIELD date1 OUTPUT-LENGTH DATA(olen1).
DESCRIBE FIELD date2 OUTPUT-LENGTH DATA(olen2).

Addition 5

... HELP-ID hlp

Effect

If the data type of the data object dobj is determined by a [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") in ABAP Dictionary, the name of the data type is assigned that was used after the addition TYPE when defining the data object dobj. The return value is a string. In an inline declaration, a variable of the type string is declared.

If the data object does not refer to a data object in ABAP Dictionary, hlp is initialized. hlp expects a character-like data object.

If a field symbol - to which a data object is assigned using the statement ASSIGN COMPONENT - is specified for dobj, and if the data object refers to a component of a structure in ABAP Dictionary, then the complete name of the structure component is returned.

Note

The addition is called HELP-ID because the name of the data type in hlp can be used for the display of the field help or input help assigned in ABAP Dictionary.

Example

After DESCRIBE FIELD, hlp contains the value "SPFLI-CARRID". Since an input help is assigned to this component in ABAP Dictionary, the input help can be displayed using the function module F4IF\_FIELD\_VALUE\_REQUEST. If the name s\_carr\_id is specified after TYPE when defining carrid, hlp contains the value "S\_CARR\_ID” and can be used, for example, to display the field help using the function module HELP\_OBJECT\_SHOW.

DATA: carrid TYPE spfli-carrid,
      struc  TYPE dfies-tabname,
      comp   TYPE dfies-fieldname.
DESCRIBE FIELD carrid HELP-ID DATA(hlp).
SPLIT hlp AT '-' INTO struc comp.
CALL FUNCTION 'F4IF\_FIELD\_VALUE\_REQUEST'
  EXPORTING
    tabname           = struc
    fieldname         = comp
  EXCEPTIONS
    field\_not\_found   = 1
    no\_help\_for\_field = 2
    inconsistent\_help = 3
    no\_values\_found   = 4
    OTHERS            = 5.

Example

Again in this example, hlp contains the value "SPFLI-CARRID" after DESCRIBE FIELD.

DATA spfli TYPE spfli.
ASSIGN COMPONENT 'CARRID' OF STRUCTURE spfli TO FIELD-SYMBOL(<fs>).
DESCRIBE FIELD <fs> HELP-ID DATA(hlp).

Addition 6

... EDIT MASK mask

Effect

If a conversion routine is assigned to the data object dobj by referring to a domain in ABAP Dictionary, the name of the conversion routine is determined and prefixed with two equals signs "==". The return value is a string. In an inline declaration, a variable of the type string is declared. If no conversion routine is assigned to the data object, mask is initialized or remains initial.

Note

If a data object mask meets these requirements, it can be used directly in the addition USING EDIT MASK of the statement WRITE *\[*TO*\]* to call the conversion routine.

Example

Since the data element S\_FLTIME is associated with the conversion routine SDURA by the domain S\_DURA, msk contains the value "==SDURA" after DESCRIBE FIELD and the statement WRITE TO returns the value "5:33" after the conversion from seconds to minutes.

DATA: time    TYPE s\_fltime,
      seconds TYPE i,
      output  TYPE c LENGTH 10.
DESCRIBE FIELD time EDIT MASK DATA(msk).
seconds = 333.
WRITE seconds TO output USING EDIT MASK msk.
cl\_demo\_output=>display\_data( output ).

Continue
![Example](exa.gif "Example") [Determining Elementary Data Types](javascript:call_link\('abendescribe_field_abexa.htm'\))


### abendescribe_field_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) →  [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)) → 

Determining Elementary Data Types

This example demonstrates how the attributes of elementary data types can be determined at runtime.

Source Code

REPORT  demo\_describe\_field.
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: dref1 TYPE REF TO data,
          dref2 TYPE REF TO data.
    FIELD-SYMBOLS: <data1> TYPE any,
                   <data2> TYPE any.
    DATA: tdescr1 TYPE c LENGTH 1,
          tdescr2 TYPE c LENGTH 1.
    DATA:  type1 TYPE c LENGTH 30 VALUE 'I',
           type2 TYPE c LENGTH 30 VALUE 'C'.
    cl\_demo\_input=>add\_field( CHANGING field = type1 ).
    cl\_demo\_input=>request(   CHANGING field = type2 ).
    TRY.
        CREATE DATA: dref1 TYPE (type1),
                     dref2 TYPE (type2).
        ASSIGN: dref1->\* TO <data1>,
                dref2->\* TO <data2>.
      CATCH cx\_sy\_create\_data\_error.
        cl\_demo\_output=>display( 'Create data error!' ).
        LEAVE PROGRAM.
    ENDTRY.
    DESCRIBE FIELD: <data1> TYPE tdescr1,
                    <data2> TYPE tdescr2.
    TRY.
        IF tdescr1 <> tdescr2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          <data2> = <data1>.
        ENDIF.
      CATCH conv\_exc.
        cl\_demo\_output=>display( \`Assignment from type \` &&
                                 tdescr2                 &&
                                 \` to \`                  &&
                                 tdescr1                 &&
                                 \` not allowed!\` ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example implements a type check that only allows assignments to be made if the source and target fields have the same type.

Using the two input fields type1 and type2, the names of elementary data types are entered. First an attempt is made, using the statement CREATE DATA, to create anonymous data objects of the types specified dynamically. If this does not work, an error message is displayed.

The new data objects are assigned to field symbols <data1> and <data2>. Then, the statement DESCRIBE FIELD determines the type of the data objects created dynamically. Only if both data objects have the same type is <data1> assigned to <data2>.

The example does not work if complex data types such as SCARR and SPFLI are entered in the input fields. In this case DESCRIBE FIELD, determines the same types ("u"), which can cause runtime errors if the structures are not convertible.

The [RTTS](javascript:call_link\('abenrtti.htm'\)) methods can be used to check complex data types and object types at runtime.


### abapdescribe_field.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE FIELD

[Quick Reference](javascript:call_link\('abapdescribe_field_shortref.htm'\))

Syntax

DESCRIBE FIELD dobj
  *\[*TYPE typ *\[*COMPONENTS com*\]**\]*
  *\[*LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE*\]*
  *\[*DECIMALS dec*\]*
  *\[*OUTPUT-LENGTH olen*\]*
  *\[*HELP-ID hlp*\]*
  *\[*EDIT MASK mask*\]*.

Extras:

[1\. ... TYPE typ *\[*COMPONENTS com*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE](#!ABAP_ADDITION_2@2@)
[3\. ... DECIMALS dec](#!ABAP_ADDITION_3@3@)
[4\. ... OUTPUT-LENGTH olen](#!ABAP_ADDITION_4@4@)
[5\. ... HELP-ID hlp](#!ABAP_ADDITION_5@5@)
[6\. ... EDIT MASK mask](#!ABAP_ADDITION_6@6@)

Effect

This statement determines multiple attributes of the data object dobj and assigns them to the specified target fields. The following can be specified as target fields of each addition:

-   Existing variables to which the return value can be converted.
    
-   Inline declarations [DATA(var)](javascript:call_link\('abendata_inline.htm'\)).
    

The various additions make it possible to determine the data type and the number of components for structures, the length used in the memory, the number of [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry"), the output length, the name of the data type for a reference to a data element in ABAP Dictionary, and any conversion routines.

Notes

-   Field symbols or formal parameters can be specified in [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") for dobj to identify the attributes of the data object they represent when the statement is executed.
    
-   The statement DESCRIBE is used to determine the attributes of data objects of elementary data types. When DESCRIBE is used for structures or data objects of [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types like strings, internal tables, or reference variables, only elementary attributes can be identified. Further details, for example, the static or dynamic type of a reference variable cannot be identified using DESCRIBE. For this kind of information, the type description classes of runtime type services ([RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry")) should be used. These enable all data object attributes of all data types to be determined.
    

Addition 1

... TYPE typ *\[*COMPONENTS com*\]*

Effect

Determines the data type of the data object dobj. The return value is a single character character-like ID. In an inline declaration, a variable of the type c with length 1 is declared. The following tables list the assignment of return codes for all possible data types. The ID is case-sensitive.

Numeric Data Type

ID

b

b

s

s

i

I

int8

8

p

P

decfloat16

a

decfloat34

e

f

F

Character-Like Data Type

ID

c

C

n

N

string

g

Byte-Like Data Type

ID

x

X

xstring

y

Date Type/Time Type/Time Stamp Type

ID

d

D

t

T

utclong

p

Enumerated Type

ID

Enumerated type

k

Reference Type

ID

Data reference

l

Object reference

r

Complex Type

ID

Flat structure

u

Deep structure

v

Internal table

h

The addition COMPONENTS determines the number of direct components of the data object dobj. The return value is of type i. For an inline declaration, a variable of type i is declared. If the data object dobj is not a structure, the value 0 is returned. If dobj is a nested structure, only the components of the highest hierarchy level are counted.

Note

If DESCRIBE FIELD is applied directly to a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry"), its data type according to the above table is returned and not the internal ID j for the boxed component.

Example

For the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") nested structure struc1, identifies the type ID "v" and three components. For the [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structure struc2, identifies the type ID "u" and two components.

DATA: BEGIN OF struc1,
        comp1 TYPE c LENGTH 1,
        comp2 TYPE string,
        BEGIN OF struc2,
          comp1 TYPE c LENGTH 1,
          comp2 TYPE i,
        END OF struc2,
      END OF struc1.
DESCRIBE FIELD: struc1        TYPE DATA(typ1) COMPONENTS DATA(comp1),
                struc1-struc2 TYPE DATA(typ2) COMPONENTS DATA(comp2).

Addition 2

... LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE

Effect

Determines the length used directly by the data object dobj in the memory in bytes or characters depending on the addition MODE. The return value is of type i. For an inline declaration, a variable of type i is declared.

The variant with the addition IN BYTE MODE identifies the length of the data object dobj in bytes. The variant with the addition IN CHARACTER MODE identifies the length of the data object dobj in characters. When using IN CHARACTER MODE, the data type of dobj must be flat and character-like. For [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types, only IN BYTE MODE can be specified. This always identifies the length of the references involved (eight bytes for each reference).

Notes

-   For data objects with a fixed length, the length is determined that is specified when the data object is created. The [built-in function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") strlen can be used to identify the used length of character-like data objects while ignoring the trailing blanks.
    
-   In structures, the [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") are included in the length. This is particularly significant in the case of alignment gaps that occur before the end of the structure.
    
-   With [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry"), the addition IN BYTE MODE must be specified and the length of the actual [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") is determined in the [basic type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").
    

Example

Calculates the bytes required for the representation of one character. The result is greater than 1 in multi-byte systems.

DATA: text  TYPE c LENGTH 1,
      bytes TYPE i.
DESCRIBE FIELD text LENGTH DATA(blen) IN BYTE MODE.
DESCRIBE FIELD text LENGTH DATA(clen) IN CHARACTER MODE.
bytes = blen / clen.

Example

The result len of the following DESCRIBE statement is 9, not 10, due to a trailing alignment gap in struct.

DATA:
  BEGIN OF struct,
    text       TYPE c LENGTH 3,
    hex  TYPE x LENGTH 3,
  END OF struct.
DESCRIBE FIELD struct LENGTH DATA(len) IN BYTE MODE.

Addition 3

... DECIMALS dec

Effect

Determines the [number of decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") of the data object dobj. The return value is of type i. For an inline declaration, a variable of type i is declared.

Note

Only data objects of the data type p can have decimal places. Therefore, the result in dec can be different from 0 only for these data objects.

Example

Detects 0 decimal places and then 4 decimal places.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING pack TYPE p.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DESCRIBE FIELD pack DECIMALS DATA(dec).
    cl\_demo\_output=>write( dec ).
  ENDMETHOD.
ENDCLASS.
DATA:
  pack1 TYPE p LENGTH 8 DECIMALS 0,
  pack2 TYPE p LENGTH 8 DECIMALS 4.
START-OF-SELECTION.
  demo=>main( pack1 ).
  demo=>main( pack2 ).
  cl\_demo\_output=>display( ).

Addition 4

... OUTPUT-LENGTH olen

Effect

For data objects with a fixed length, determines the output length of the data object dobj required for [screen layouts](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"). The return value is of type i. For an inline declaration, a variable of type i is declared.

Generally, this result corresponds to the predefined output length of the data object in accordance with its data type in the output in the list buffer. In strings, olen is always set to 0. olen expects the data type i.

Notes

-   Normally, the required output length is specified adequately by the entry in the table for predefined [output lengths](javascript:call_link\('abenwrite_output_length.htm'\)). This is not the case when the data type of the data object is defined with a reference to ABAP Dictionary and an output length or a conversion routine is specified in the corresponding domain.
    
-   If the output length defined in a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") for a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") with the same name as dobj is shorter than the required output length, an overflow raises a non-handleable exception. When passed to the list buffer, the outputs are truncated if the output length is shorter than the required output length.
    
-   When separators or templates are provided in the user master record for the output of a data type, they are only displayed if the defined output length is sufficient. The required length can be longer than the output length identified by OUTPUT-LENGTH.
    
-   The output length for strings can be determined using the functions strlen or xstrlen.
    

Example

For date1, identifies the output length 8 associated with the type d. For date2, identifies the output length 10 defined in the domain SYDATS.

DATA: date1 TYPE d,
      date2 TYPE sy-datum.
DESCRIBE FIELD date1 OUTPUT-LENGTH DATA(olen1).
DESCRIBE FIELD date2 OUTPUT-LENGTH DATA(olen2).

Addition 5

... HELP-ID hlp

Effect

If the data type of the data object dobj is determined by a [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") in ABAP Dictionary, the name of the data type is assigned that was used after the addition TYPE when defining the data object dobj. The return value is a string. In an inline declaration, a variable of the type string is declared.

If the data object does not refer to a data object in ABAP Dictionary, hlp is initialized. hlp expects a character-like data object.

If a field symbol - to which a data object is assigned using the statement ASSIGN COMPONENT - is specified for dobj, and if the data object refers to a component of a structure in ABAP Dictionary, then the complete name of the structure component is returned.

Note

The addition is called HELP-ID because the name of the data type in hlp can be used for the display of the field help or input help assigned in ABAP Dictionary.

Example

After DESCRIBE FIELD, hlp contains the value "SPFLI-CARRID". Since an input help is assigned to this component in ABAP Dictionary, the input help can be displayed using the function module F4IF\_FIELD\_VALUE\_REQUEST. If the name s\_carr\_id is specified after TYPE when defining carrid, hlp contains the value "S\_CARR\_ID” and can be used, for example, to display the field help using the function module HELP\_OBJECT\_SHOW.

DATA: carrid TYPE spfli-carrid,
      struc  TYPE dfies-tabname,
      comp   TYPE dfies-fieldname.
DESCRIBE FIELD carrid HELP-ID DATA(hlp).
SPLIT hlp AT '-' INTO struc comp.
CALL FUNCTION 'F4IF\_FIELD\_VALUE\_REQUEST'
  EXPORTING
    tabname           = struc
    fieldname         = comp
  EXCEPTIONS
    field\_not\_found   = 1
    no\_help\_for\_field = 2
    inconsistent\_help = 3
    no\_values\_found   = 4
    OTHERS            = 5.

Example

Again in this example, hlp contains the value "SPFLI-CARRID" after DESCRIBE FIELD.

DATA spfli TYPE spfli.
ASSIGN COMPONENT 'CARRID' OF STRUCTURE spfli TO FIELD-SYMBOL(<fs>).
DESCRIBE FIELD <fs> HELP-ID DATA(hlp).

Addition 6

... EDIT MASK mask

Effect

If a conversion routine is assigned to the data object dobj by referring to a domain in ABAP Dictionary, the name of the conversion routine is determined and prefixed with two equals signs "==". The return value is a string. In an inline declaration, a variable of the type string is declared. If no conversion routine is assigned to the data object, mask is initialized or remains initial.

Note

If a data object mask meets these requirements, it can be used directly in the addition USING EDIT MASK of the statement WRITE *\[*TO*\]* to call the conversion routine.

Example

Since the data element S\_FLTIME is associated with the conversion routine SDURA by the domain S\_DURA, msk contains the value "==SDURA" after DESCRIBE FIELD and the statement WRITE TO returns the value "5:33" after the conversion from seconds to minutes.

DATA: time    TYPE s\_fltime,
      seconds TYPE i,
      output  TYPE c LENGTH 10.
DESCRIBE FIELD time EDIT MASK DATA(msk).
seconds = 333.
WRITE seconds TO output USING EDIT MASK msk.
cl\_demo\_output=>display\_data( output ).

Continue
![Example](exa.gif "Example") [Determining Elementary Data Types](javascript:call_link\('abendescribe_field_abexa.htm'\))


### abapdescribe_table.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE TABLE

[Quick Reference](javascript:call_link\('abapdescribe_table_shortref.htm'\))

Syntax

DESCRIBE TABLE itab *\[*KIND knd*\]* *\[*LINES lin*\]* *\[*OCCURS n*\]*.

Extras:

[1\. ... KIND knd](#!ABAP_ADDITION_1@1@)
[2\. ... LINES lin](#!ABAP_ADDITION_2@2@)
[3\. ... OCCURS n](#!ABAP_ADDITION_3@3@)

Effect

This statement determines some of the properties of the internal table itab and assigns them to the specified target fields. The following can be specified as target fields of each addition:

-   Existing variables to which the return value can be converted.
    
-   Inline declarations [DATA(var)](javascript:call_link\('abendata_inline.htm'\)).
    

The various additions enable the table category, the number of currently filled rows, and the initial memory requirement to be determined.

In addition, the system fields sy-tfill and sy-tleng are filled with the current number of table rows and the length of a table row in bytes.

Notes

-   For more detailed information about an internal table, it is best to use the methods of the [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") of the statement DESCRIBE TABLE.
    
-   If no addition is specified, the statement DESCRIBE TABLE only sets the system fields sy-tfill and sy-tleng.
    

Addition 1

... KIND knd

Effect

Determines the table category of the internal table itab. The return value is a single character character-like ID. In an inline declaration, a variable of the type c with length 1 is declared.

The possible IDs are "T" for [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"), "S" for sorted tables, and "H" for [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"). These values are also defined as constants sydes\_kind-standard, sydes\_kind-sorted, and sydes\_kind-hashed in the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") SYDES.

Example

Sorts a generically typed internal table in a method in descending order. Since [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") cannot be sorted in descending order, the table category is checked to prevent non-handleable exceptions from being raised.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS sort\_descending CHANGING itab TYPE ANY TABLE.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD sort\_descending.
    DESCRIBE TABLE itab KIND DATA(tabkind).
    IF tabkind = sydes\_kind-standard OR
       tabkind = sydes\_kind-hashed.
      SORT itab DESCENDING.
    ELSEIF tabkind = sydes\_kind-sorted.
      MESSAGE '...' TYPE 'E'.
    ELSE.
      MESSAGE '...' TYPE 'E'.
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Addition 2

... LINES lin

Effect

Determines the current number of table rows in the internal table itab. The return value has the type i. In an inline declaration, a variable of the type i is declared.

Note

The current number of rows of an internal table can also be determined using the [built-in function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") [lines](javascript:call_link\('abendescriptive_functions_table.htm'\)), which can be used in suitable [operand positions](javascript:call_link\('abenexpression_positions.htm'\)).

Example

The example shows that the addition of LINES to DESCRIBE TABLE and the built-in function [lines](javascript:call_link\('abendescriptive_functions_table.htm'\)) have the same result.

SELECT carrid
       FROM scarr
       INTO TABLE @DATA(scarr\_tab).
DESCRIBE TABLE scarr\_tab LINES DATA(lines).
ASSERT lines = lines( scarr\_tab ).

Addition 3

... OCCURS n

Effect

Determines the initial memory requirements defined using the addition [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\)) or the obsolete addition [OCCURS](javascript:call_link\('abaptypes_occurs.htm'\)) when the internal table is created. The return value has the type i. In an inline declaration, a variable of the type i is declared.

Example

The example shows that the addition of OCCURS to DESCRIBE TABLE and the attribute INITIAL\_SIZE of a type description object of class CL\_ABAP\_TABLEDESCR produce the same value.

DATA itab TYPE TABLE OF i INITIAL SIZE 10 WITH EMPTY KEY.
DESCRIBE TABLE itab OCCURS DATA(occ).
ASSERT occ = CAST cl\_abap\_tabledescr(
  cl\_abap\_typedescr=>describe\_by\_data( itab ) )->initial\_size.


### abapdescribe_distance.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE DISTANCE

[Quick Reference](javascript:call_link\('abapdescribe_distance_shortref.htm'\))

Syntax

DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst
                          IN *{*BYTE*|*CHARACTER*}* MODE.

Effect

This statement determines the distance between the start positions of the data objects dobj1 and dobj2.

The return value has the type i. The following can be specified for dst:

-   An existing variable to which the return value can be converted.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type i is declared.
    

It is not important in which order dobj1 and dobj2 are specified.

The variant with the addition IN BYTE MODE determines the distance in bytes. The variant with the addition IN CHARACTER MODE converts the distance into characters that can be stored in this length according to the current character format. When this addition is used in IN CHARACTER MODE and the determined distance cannot be converted into a number of characters, a non-handleable exception is raised.

In the case of [deeper](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types, the referenced data object is not relevant but the position of the internal reference (for strings and internal tables) or the reference variables instead.

Notes

-   The distance between data objects should only be determined within the same structure and only the structure's components should be used, since this is the only way to guarantee that they follow each other immediately in the memory. Note that the [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") are counted as well. Therefore, use the addition in IN BYTE MODE to avoid a non-handleable exception.
    
-   With respect to DESCRIBE DISTANCE, every substructure declared as a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") is an independent structure. The distance between components which are not in the same boxed component is undefined.
    

Example

The results of the two statements in a Unicode system are 5 and 10.

DATA text TYPE c LENGTH 10 VALUE '0123456789'.
DESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1)
         INTO DATA(cdist)
         IN CHARACTER MODE.
DESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1)
         INTO DATA(bdist)
         IN BYTE MODE.

Executable Example

[Determining Data Object Distances](javascript:call_link\('abendescribe_distance_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Distance cannot be converted into characters.
    Runtime error: UC\_NO\_CHAR\_NUMBER
    

Continue
![Example](exa.gif "Example") [Determining Data Object Distances](javascript:call_link\('abendescribe_distance_abexa.htm'\))


### abendescribe_distance_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) →  [DESCRIBE DISTANCE](javascript:call_link\('abapdescribe_distance.htm'\)) → 

Determining Data Object Distances

The example demonstrates how the distance between two data objects can be determined at runtime.

Source Code

REPORT demo\_describe\_distance.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF struc,
            comp1 TYPE i,
            comp2 TYPE x LENGTH 1,
            comp3 TYPE c LENGTH 4 VALUE 'Hey',
            comp4 TYPE c LENGTH 4 VALUE 'you!',
            comp5 TYPE x,
          END OF struc.
    FIELD-SYMBOLS: <hex>    TYPE x,
                   <result> TYPE c.
    DESCRIBE DISTANCE BETWEEN:
             struc       AND struc-comp3 INTO DATA(off) IN BYTE MODE,
             struc-comp3 AND struc-comp5 INTO DATA(len) IN BYTE MODE.
    ASSIGN: struc TO <hex> CASTING,
            <hex>+off(len) TO <result> CASTING.
    cl\_demo\_output=>display(
      |Offset off is { off }.\\n| &&
      |Length len is { len }.\\n| &&
      |<result> points to "{ <result> }".| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Determines the offset and length, in bytes, of a character-like fragment within the struc structure, accesses the fragment using an offset/length access, and assigns it a field symbol of type c. Since the structure is not just character-like, the offset/length access takes place using a field symbol. If not, a syntax error occurs. The field symbol is of the type x, since offsets and lengths are determined in bytes. The field symbol <result> points to the fragment "Hey you!".


### abapdescribe_distance.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE DISTANCE

[Quick Reference](javascript:call_link\('abapdescribe_distance_shortref.htm'\))

Syntax

DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst
                          IN *{*BYTE*|*CHARACTER*}* MODE.

Effect

This statement determines the distance between the start positions of the data objects dobj1 and dobj2.

The return value has the type i. The following can be specified for dst:

-   An existing variable to which the return value can be converted.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type i is declared.
    

It is not important in which order dobj1 and dobj2 are specified.

The variant with the addition IN BYTE MODE determines the distance in bytes. The variant with the addition IN CHARACTER MODE converts the distance into characters that can be stored in this length according to the current character format. When this addition is used in IN CHARACTER MODE and the determined distance cannot be converted into a number of characters, a non-handleable exception is raised.

In the case of [deeper](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types, the referenced data object is not relevant but the position of the internal reference (for strings and internal tables) or the reference variables instead.

Notes

-   The distance between data objects should only be determined within the same structure and only the structure's components should be used, since this is the only way to guarantee that they follow each other immediately in the memory. Note that the [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") are counted as well. Therefore, use the addition in IN BYTE MODE to avoid a non-handleable exception.
    
-   With respect to DESCRIBE DISTANCE, every substructure declared as a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") is an independent structure. The distance between components which are not in the same boxed component is undefined.
    

Example

The results of the two statements in a Unicode system are 5 and 10.

DATA text TYPE c LENGTH 10 VALUE '0123456789'.
DESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1)
         INTO DATA(cdist)
         IN CHARACTER MODE.
DESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1)
         INTO DATA(bdist)
         IN BYTE MODE.

Executable Example

[Determining Data Object Distances](javascript:call_link\('abendescribe_distance_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Distance cannot be converted into characters.
    Runtime error: UC\_NO\_CHAR\_NUMBER
    

Continue
![Example](exa.gif "Example") [Determining Data Object Distances](javascript:call_link\('abendescribe_distance_abexa.htm'\))


### abendescribe_internal.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE - internal variant

This statement is for internal use only.
It must not be used in application programs.

-   [DESCRIBE FIELD INTO](javascript:call_link\('abapdescribe_field_into.htm'\))

Continue
[DESCRIBE FIELD INTO](javascript:call_link\('abapdescribe_field_into.htm'\))


### abapdescribe_field_into.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) →  [DESCRIBE - internal variant](javascript:call_link\('abendescribe_internal.htm'\)) → 

DESCRIBE FIELD INTO

This statement is for internal use only.
It must not be used in application programs.

Syntax

DESCRIBE FIELD dobj INTO td.

Effect

All attributes of the field f, its components, subcomponents, and so on, are in the output of the field td (type description). td must have the type SYDES\_DESC, defined in the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") SYDES.

The structure SYDES\_DESC has two table-like components TYPES and NAMES:

-   The tree structure of the type belonging to f is mapped to TYPES. The components of a node are stored in the table TYPES in a continuous manner. The beginning and end of the row area that represents the components are stored in TYPES-FROM and TYPES-TO. The reference to the superior node can be found in TYPES-BACK. If no superior or subordinate node exists, then this is marked by the value 0 (for the relevance of further components, see the following sections).
    
-   The names of components, types, and so on. are not stored directly in TYPES. Instead, the components TYPES-IDX\_... hold an index in the name table NAMES. The value 0 indicates that there is no reference to the name table.
    NAMES contains the names in the component NAMES-NAME, possibly in parts. If a name continues in the following row, this is indicated by an asterisk ('\*') in the component NAMES-CONTINUE.
    

The type description table (TYPES) not only stores information about the tree structure but also further information about the type of f or its components. In particular, this includes all information that can be determined using the usual additions of DESCRIBE FIELD. In detail, TYPES contains the following columns:

IDX\_NAME

Component name

IDX\_USER\_TYPE

Name of a user-defined type, in other words a type defined by a [TYPES](javascript:call_link\('abaptypes.htm'\)) statement. Derived types (... TYPE A-B) and structures from ABAP Dictionary are not considered to be user-defined types.

CONTEXT

For user-defined types only: The context in which the type is defined. Possible values are defined in the constant SYDES\_CONTEXT of the type group SYDES. Only use these constants to carry out a comparison. The following type contexts are distinguished:
SYDES\_CONTEXT-PROGRAM: Program-global type
SYDES\_CONTEXT-FORM : FORM\-local type
SYDES\_CONTEXT-FUNCTION: FUNCTION\-local type
SYDES\_CONTEXT-METHOD : METHOD\-local type

IDX\_CONTEXT\_NAME

For user-defined types only:
In a local context: The name of the FORM or FUNCTION in which the type was defined. The name of the associated program is then the first entry in the name table.
In a global context: The name of the program in which the type was defined.

IDX\_EDIT\_MASK

Conversion routine from ABAP Dictionary, like the addition EDIT MASK in a simple DESCRIBE.

IDX\_HELP\_ID

Help ID when referencing fields from ABAP Dictionary

LENGTH

Internal length, like the addition LENGTH in a simple DESCRIBE

OUTPUT\_LENGTH

Output length, like the addition OUTPUT-LENGTH in a simple DESCRIBE

DECIMALS

Number of [decimal digits](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry"), like the addition DECIMALS in a simple DESCRIBE

TYPE

ABAP type, like the addition TYPE in a simple DESCRIBE. If DESCRIBE INTO is applied to a nested structure which contains a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry"), the type is returned with the internal ID j ([static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry")).

TABLE\_KIND

A [table category](javascript:call_link\('abaptypes_tabkind.htm'\)) is stored here for the components which represent an internal table. The same values are returned as with the variant [DESCRIBE TABLE itab KIND k](javascript:call_link\('abapdescribe_table.htm'\)). For components which do not represent a table, the return code is set to SYDES\_KIND-UNDEFINED (see type group SYDES).

Example

Take the following definition of the complex data type EMPLOYEE\_STRUC:

PROGRAM DESCTEST.
TYPES: BEGIN OF name\_struc,
         first  TYPE c LENGTH 20,
         last   TYPE c LENGTH 20,
       END OF name\_struc,
       BEGIN OF absence\_time\_struc,
         day        TYPE d,
         from       TYPE t,
         to         TYPE t,
       END OF absence\_time\_struc,
       phone\_number TYPE n LENGTH 20,
       BEGIN OF employee\_struc,
         id         LIKE sbook-customid,
         name       TYPE name\_struc,
         BEGIN OF address,
           street  TYPE c LENGTH 30,
           zipcode TYPE n LENGTH 4,
           place   TYPE c LENGTH 30,
         END OF address,
         salary\_per\_month TYPE p LENGTH 10 DECIMALS 3,
         absent           TYPE STANDARD TABLE OF absence\_time\_struc
                               WITH NON-UNIQUE DEFAULT KEY,
         phone            TYPE STANDARD TABLE OF phone\_number
                               WITH NON-UNIQUE DEFAULT KEY,
       END OF employee\_struc.

The structure of the type can be determined by collecting the type group SYDES as follows:

DATA: employee TYPE employee\_struc,
      td       TYPE sydes\_desc.
DESCRIBE FIELD employee INTO td.

The following table shows a few selected columns of the type description table TD-TYPES. To make it easier to read, the names of the columns IDX\_NAME, IDX\_UERR\_TYPE, and IDX\_EDIT\_MASK have been shortened:

   |FROM| TO |BACK|NAME|UTYP|EMSK|TYPE
\---|----|----|----|----|----|----|----
01 |  2 |  7 |  0 |  0 |  2 |  0 |  v
02 |  0 |  0 |  1 |  6 |  0 |  4 |  N
03 |  8 |  9 |  1 |  7 |  5 |  0 |  u
04 | 10 | 12 |  1 |  8 |  0 |  0 |  u
05 |  0 |  0 |  1 |  9 |  0 |  0 |  P
06 | 13 | 13 |  1 | 11 |  0 |  0 |  h
07 | 17 | 17 |  1 | 12 |  0 |  0 |  h
08 |  0 |  0 |  3 | 13 |  0 |  0 |  C
09 |  0 |  0 |  3 | 14 |  0 |  0 |  C
10 |  0 |  0 |  4 | 15 |  0 |  0 |  C
11 |  0 |  0 |  4 | 16 |  0 |  0 |  N
12 |  0 |  0 |  4 | 17 |  0 |  0 |  C
13 | 14 | 16 |  6 |  0 | 18 |  0 |  u
14 |  0 |  0 | 13 | 20 |  0 |  0 |  D
15 |  0 |  0 | 13 | 21 |  0 |  0 |  T
16 |  0 |  0 | 13 | 22 |  0 |  0 |  T
17 |  0 |  0 |  7 |  0 |  0 |  0 |  N

Note that the entries in rows 6 and 7 represent internal tables (ABAP type h). In an internal table, there is always an entry for the associated row type (rows 13 and 17).
The indexes in the rows 5 to 7 refer to entries in the name table TD-NAMES. Taking, for example, row 3, the associated component name in TD-NAMES is found from row 7 (NAME) onward and the associated user type from row 5 (NAME\_STRUC) onward.
The name table TD-NAMES contains the following entries. Note that the names SALARY\_PER\_MONTH and ABSENCE\_TIME\_STRUC are stored in two parts:

   |CONTINUE|NAME                   |CONTINUE|NAME
\---|--------|--------------     ----|--------|--------------
01 |        |DESCTEST            12 |        |PHONE
02 |        |EMPLOYEE\_STRUC      13 |        |FIRST
03 |        |SBOOK-CUSTOMID      14 |        |LAST
04 |        |==ALPHA             15 |        |STREET
05 |        |NAME\_STRUC          16 |        |ZIPCODE
06 |        |ID                  17 |        |PLACE
07 |        |NAME                18 |   \*    |ABSENCE\_TIME\_ST
08 |        |ADDRESS             19 |        |RUC
09 |   \*    |SALARY\_PER\_MONT     20 |        |DAY
10 |        |H                   21 |        |FROM
11 |        |ABSENT              22 |        |TO


### abendescribe_internal.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE - internal variant

This statement is for internal use only.
It must not be used in application programs.

-   [DESCRIBE FIELD INTO](javascript:call_link\('abapdescribe_field_into.htm'\))

Continue
[DESCRIBE FIELD INTO](javascript:call_link\('abapdescribe_field_into.htm'\))
