  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) →  [Built-In Numeric Types](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) → 

Value Ranges of Packed Numbers

This example demonstrates the value ranges of packed numbers with different lengths and decimal places.

Source Code

REPORT demo\_type\_p\_value\_range.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:length   TYPE i VALUE 2,
         decimals TYPE i VALUE 2.
    cl\_demo\_input=>add\_field( EXPORTING text  = \`Length\`
                              CHANGING  field = length ).
    cl\_demo\_input=>request(   EXPORTING text  = \`Decimals\`
                              CHANGING  field = decimals ).
    DATA dref TYPE REF TO data.
    FIELD-SYMBOLS <pack> TYPE p.
    TRY.
        IF decimals > 2 \* length - 1.
          RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error.
        ENDIF.
        CREATE DATA dref TYPE p LENGTH length DECIMALS decimals.
        ASSIGN dref->\* TO <pack>.
      CATCH cx\_sy\_create\_data\_error.
        cl\_demo\_output=>display( 'Wrong input values ...' ).
        LEAVE PROGRAM.
    ENDTRY.
    DATA(lower)
      = cl\_abap\_exceptional\_values=>get\_min\_value( <pack> ).
    IF lower IS NOT INITIAL.
      ASSIGN lower->\* TO FIELD-SYMBOL(<lower>).
      cl\_demo\_output=>write\_data( <lower> ).
    ENDIF.
    ASSERT <lower> =  CONV decfloat34(
     ( ipow( base = -10 exp = 2 \* length - 1 ) + 1 ) /
       ipow( base  = 10 exp = decimals ) ).
    DATA(upper)
       = cl\_abap\_exceptional\_values=>get\_max\_value( <pack> ).
    IF upper IS NOT INITIAL.
      ASSIGN upper->\* TO FIELD-SYMBOL(<upper>).
      cl\_demo\_output=>write\_data( <upper> ).
    ENDIF.
    ASSERT <upper> = CONV decfloat34(
     ( ipow( base = +10 exp = 2 \* length - 1 ) - 1 ) /
       ipow( base  = 10 exp = decimals ) ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The value range of a packed number with the length length and decimals decimal places is one of the following according to the formula in this [table](javascript:call_link\('abenbuiltin_types_numeric.htm'\))):

( -10^(2xlength-1) +1 ) / ( 10^decimals )

to

( +10^(2xlength-1) -1 ) / ( 10^decimals )

The program creates a packed number with a length and decimal places that can be entered from outside. The minimum and maximum values of the number are determined using methods of the system class CL\_ABAP\_EXCEPTIONAL\_VALUES and compared with self-calculated values.