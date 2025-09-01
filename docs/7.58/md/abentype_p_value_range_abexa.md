  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) →  [Built-In Numeric Types](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Value%20Ranges%20of%20Packed%20Numbers%2C%20ABENTYPE_P_VALUE_RANGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Value Ranges of Packed Numbers

This example demonstrates the value ranges of packed numbers with different lengths and decimal places.

Source Code   

\* Public class definition
CLASS cl\_demo\_type\_p\_value\_range DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_type\_p\_value\_range IMPLEMENTATION.
  METHOD main.
    DATA:length   TYPE i VALUE 2,
         decimals TYPE i VALUE 2.
    cl\_demo\_input=>new(
     )->add\_field( EXPORTING text  = \`Length\`
                   CHANGING  field = length
     )->request(   EXPORTING text  = \`Decimals\`
                   CHANGING  field = decimals ).
    DATA dref TYPE REF TO data.
    TRY.
        IF decimals > 2 \* length - 1.
          RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error.
        ENDIF.
        CREATE DATA dref TYPE p LENGTH length DECIMALS decimals.
      CATCH cx\_sy\_create\_data\_error.
        out->write( 'Wrong input values ...' ).
        RETURN.
    ENDTRY.
    FINAL(lower)
      = cl\_abap\_exceptional\_values=>get\_min\_value( dref->\* ).
    IF lower IS NOT INITIAL.
      ASSIGN lower->\* TO FIELD-SYMBOL(<lower>).
      out->write\_data( <lower> ).
    ENDIF.
    ASSERT <lower> =  CONV decfloat34(
     ( ipow( base = -10 exp = 2 \* length - 1 ) + 1 ) /
       ipow( base  = 10 exp = decimals ) ).
    FINAL(upper)
       = cl\_abap\_exceptional\_values=>get\_max\_value( dref->\* ).
    IF upper IS NOT INITIAL.
      ASSIGN upper->\* TO FIELD-SYMBOL(<upper>).
      out->write\_data( <upper> ).
    ENDIF.
    ASSERT <upper> = CONV decfloat34(
     ( ipow( base = +10 exp = 2 \* length - 1 ) - 1 ) /
       ipow( base  = 10 exp = decimals ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The value range of a packed number with the length length and decimals decimal places is one of the following according to the formula in this [table](javascript:call_link\('abenbuiltin_types_numeric.htm'\))):

( -10^(2xlength-1) +1 ) / ( 10^decimals )

to

( +10^(2xlength-1) -1 ) / ( 10^decimals )

The method creates a packed number with a length and decimal places that can be entered from outside. The minimum and maximum values of the number are determined using methods of the system class CL\_ABAP\_EXCEPTIONAL\_VALUES and compared with self-calculated values.