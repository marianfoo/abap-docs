# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Numeric Calculations / System Classes for Numbers

Included pages: 9


### abencl_abap_math.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Classes%20for%20Numbers%2C%20ABENCL_ABAP_MATH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Classes for Numbers

-   [System Class CL\_ABAP\_MATH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfloating_point_class.htm)
-   [System Class CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_decfloat_doc.htm)
-   [System Class CL\_ABAP\_BIGINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_bigint_doc.htm)
-   [System Class CL\_ABAP\_RATIONAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_rational_doc.htm)
-   [Random Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrandom_number_class.htm)

Continue
[System Class CL\_ABAP\_MATH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfloating_point_class.htm)
[System Class CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_decfloat_doc.htm)
[System Class CL\_ABAP\_BIGINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_bigint_doc.htm)
[System Class CL\_ABAP\_RATIONAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_rational_doc.htm)
[Random Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrandom_number_class.htm)


### abenfloating_point_class.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_math.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20CL_ABAP_MATH%2C%20ABENFLOATING_POINT_CLASS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Class CL\_ABAP\_MATH

-   [Constants for Minimum and Maximum Values](#@@ITOC@@ABENFLOATING_POINT_CLASS_1)
-   [Operations with Floating Point Numbers](#@@ITOC@@ABENFLOATING_POINT_CLASS_2)
    -   [Rounding Binary Floating Point Numbers](#@@ITOC@@ABENFLOATING_POINT_CLASS_3)
    -   [Operations with Decimal Floating Point Numbers](#@@ITOC@@ABENFLOATING_POINT_CLASS_4)

Constants for Minimum and Maximum Values   

The class CL\_ABAP\_MATH contains constants with the limits of the value ranges [built-in numeric types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm).

Example

Display of the minimum and maximum values of numeric types.

cl\_demo\_output=>display(
  |i:          { cl\_abap\_math=>min\_int4 WIDTH = 20
          } to { cl\_abap\_math=>max\_int4 WIDTH = 20 } \\n| &&
  |int8:       { cl\_abap\_math=>min\_int8 WIDTH = 20
          } to { cl\_abap\_math=>max\_int8 WIDTH = 20 } \\n| &&
  |decfloat16: { cl\_abap\_math=>min\_decfloat16 STYLE = SCIENTIFIC
                                              WIDTH = 20
          } to { cl\_abap\_math=>max\_decfloat16 STYLE = SCIENTIFIC
                                              WIDTH = 20 } \\n| &&
  |decfloat34: { cl\_abap\_math=>min\_decfloat34 STYLE = SCIENTIFIC
                                              WIDTH = 20
          } to { cl\_abap\_math=>max\_decfloat34 STYLE = SCIENTIFIC
                                              WIDTH = 20 } \\n| ).

Operations with Floating Point Numbers   

The class CL\_ABAP\_MATH contains methods for operations with floating point numbers.

Rounding Binary Floating Point Numbers   

The method ROUND\_F\_TO\_15\_DECS rounds a [binary floating point number](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbinfloat_glosry.htm "Glossary Entry") to 15 places using commercial rounding.

Hint

Commercial rounding to 15 digits can also be achieved using the built-in function [round](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendec_floating_point_functions.htm), the result of which, however, has the decfloat34 type.

Example

The example shows how rounding errors in the output formatting of binary floating point numbers can be prevented by two-step rounding using the method ROUND\_F\_TO\_15\_DECS. Instead of the method call, the function call round( val = float dec = 15 ) can be used here.

DATA float TYPE f VALUE '1.005'.
cl\_demo\_output=>display(
  |{ float DECIMALS = 2 }\\n| &&
  |{ cl\_abap\_math=>round\_f\_to\_15\_decs( float ) DECIMALS = 2 }\\n| ).

Operations with Decimal Floating Point Numbers   

-   The method GET\_SCALE returns the [scaling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscale_glosry.htm "Glossary Entry") of a [decimal floating point number](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecfloat_glosry.htm "Glossary Entry").
-   The method GET\_NUMBER\_OF\_DIGITS returns the [precision](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprecision_glosry.htm "Glossary Entry") of a [decimal floating point number](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecfloat_glosry.htm "Glossary Entry").
-   The method NORMALIZE returns a normalized floating point number. This means that the [scaling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscale_glosry.htm "Glossary Entry") and [precision](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprecision_glosry.htm "Glossary Entry") of an input value are changed so that the mantissa has no trailing zeros.
-   The method GET\_SCALE\_NORMALIZED returns the [scaling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscale_glosry.htm "Glossary Entry") of a normalized [decimal floating point number](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecfloat_glosry.htm "Glossary Entry"). If the input value has decimal places, the return value is the number of decimal places without trailing zeros.
-   The method GET\_MAX\_DB\_VALUE returns the maximum value of a number of the type DF16\_DEC or DF34\_DEC on the database.
-   The method GET\_DB\_LENGTH\_DECS returns the length and number of decimal places of a number of the type DF16\_DEC or DF34\_DEC on the database.

Hint

The [rounding functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrounding_function_glosry.htm "Glossary Entry") round and rescale can be used to round and rescale decimal floating point numbers.

Example

Display of the scaling and precision of a decimal floating point number.

FINAL(decf) = CONV decfloat34( '1234.56789' ).
cl\_demo\_output=>display(
|value = { decf
}\\nscale = { cl\_abap\_math=>get\_scale( decf )
}\\nprecision = { cl\_abap\_math=>get\_number\_of\_digits( decf ) }| ).


### abencl_abap_decfloat_doc.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_math.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20CL_ABAP_DECFLOAT%2C%20ABENCL_ABAP_DECFLOAT_DOC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Class CL\_ABAP\_DECFLOAT

The system class CL\_ABAP\_DECFLOAT contains methods for handling [decimal floating point numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecfloat_glosry.htm "Glossary Entry").

-   The methods READ\_DECFLOAT34 and READ\_DECFLOAT16 convert strings to decimal floating point numbers. The exceptions of these methods are more significant than those of a regular assignment. Furthermore, the methods return a return value that reveals information about the roundings performed.
-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR convert currency amounts to decimal floating point numbers as specified by a currency key and vice versa.

Hint

The formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm) of the [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm) and [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) statements works like the method CONVERT\_DECFLOAT\_TO\_CURR.


### abencl_abap_bigint_doc.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_math.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20CL_ABAP_BIGINT%2C%20ABENCL_ABAP_BIGINT_DOC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Class CL\_ABAP\_BIGINT

The documented system class CL\_ABAP\_BIGINT contains methods for calculations with integers of any size in ABAP.

Executable Examples

-   [CL\_ABAP\_BIGINT, Key Encryption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbigint_abexa.htm)
-   [CL\_ABAP\_BIGINT, Square Root Calculation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbigint1_abexa.htm)

Continue
![Example](exa.gif "Example") [CL\_ABAP\_BIGINT, Key Encryption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbigint_abexa.htm)
![Example](exa.gif "Example") [CL\_ABAP\_BIGINT, Square Root Calculation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbigint1_abexa.htm)


### abenbigint_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_math.htm) →  [System Class CL\_ABAP\_BIGINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_bigint_doc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BIGINT%2C%20Key%20Encryption%2C%20ABENBIGINT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BIGINT, Key Encryption

This example uses methods of the system class CL\_ABAP\_BIGINT to encrypt a text by generating public and private keys using the RSA algorithm.

Source Code   

\* Public class definition
CLASS cl\_demo\_bigint\_rsa DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    TYPES: BEGIN OF ty\_key,
             exponent TYPE REF TO cl\_abap\_bigint,
             modulus  TYPE REF TO cl\_abap\_bigint,
             bits     TYPE i,
           END OF ty\_key,
           BEGIN OF ty\_print\_key,
             exponent TYPE string,
             modulus  TYPE string,
             bits     TYPE i,
           END OF ty\_print\_key.
    METHODS create\_random\_bigint
      IMPORTING min\_bits      TYPE i
      RETURNING VALUE(bigint) TYPE REF TO cl\_abap\_bigint.
    METHODS next\_prime CHANGING bigint TYPE REF TO cl\_abap\_bigint.
    METHODS encrypt IMPORTING message          TYPE string
                              public\_key       TYPE ty\_key
                    RETURNING VALUE(encrypted)
                                TYPE REF TO cl\_abap\_bigint.
    METHODS decrypt IMPORTING encrypted
                                TYPE REF TO cl\_abap\_bigint
                              private\_key      TYPE ty\_key
                    RETURNING VALUE(decrypted) TYPE string.
    METHODS create\_bigint\_from\_xstring
      IMPORTING xstring TYPE xstring
      RETURNING VALUE(bigint) TYPE REF TO cl\_abap\_bigint.
    METHODS create\_xstring\_from\_bigint
      IMPORTING bigint TYPE REF TO cl\_abap\_bigint
      RETURNING VALUE(xstring) TYPE xstring.
    METHODS make\_key\_printable IMPORTING key
                                           TYPE ty\_key
                               RETURNING VALUE(printable\_key)
                                           TYPE ty\_print\_key.
    METHODS generate\_key IMPORTING bits
                                     TYPE i
                         EXPORTING public\_key
                                     TYPE ty\_key
                                   private\_key TYPE ty\_key.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_bigint\_rsa IMPLEMENTATION.
  METHOD main.
    DATA p\_bits TYPE i VALUE 128.
    DATA: public\_key     TYPE ty\_key,
          private\_key    TYPE ty\_key,
          secret\_message TYPE string VALUE \`Hello ABAP\` ##NO\_TEXT.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = p\_bits
      )->request( ).
    DATA(rsa) = NEW cl\_demo\_bigint\_rsa( ).
    rsa->generate\_key( EXPORTING bits = p\_bits
                       IMPORTING public\_key = public\_key
                                 private\_key = private\_key ).
    IF private\_key-bits <> p\_bits.
      out->write( \`Number of bits was set to: \` && private\_key-bits )
      ##NO\_TEXT.
    ENDIF.
    out->write( 'PUBLIC KEY' ).
    out->write( rsa->make\_key\_printable( public\_key ) ).
    out->write( 'PRIVATE KEY' ).
    out->write( rsa->make\_key\_printable( private\_key ) ).
    out->write( 'SECRET\_MESSAGE' ).
    out->write( secret\_message ).
    DATA(encrypted) = rsa->encrypt( message = secret\_message
                                    public\_key = public\_key ).
    out->write( 'ENCRYPTED' ).
    out->write( encrypted->to\_string( ) ).
    DATA(decrypted) = rsa->decrypt( encrypted = encrypted
                                    private\_key = private\_key ).
    out->write( 'DECRYPTED' ).
    out->write( decrypted ).
    IF secret\_message <> decrypted.
      out->write( 'Need more bits for correct decryption' )
      ##NO\_TEXT.
    ENDIF.
  ENDMETHOD.
  METHOD create\_bigint\_from\_xstring.
    bigint = REDUCE #( INIT x = cl\_abap\_bigint=>factory\_from\_int4( )
                       FOR i = 0 UNTIL i >= xstrlen( xstring )
                       LET byte = xstring+i(1) IN
                       NEXT x = x->mul\_by\_two\_power( 8 )->add\_int4(
                         CONV #( byte ) ) ).
  ENDMETHOD.
  METHOD create\_random\_bigint.
    DATA random TYPE xstring.
    CALL FUNCTION 'GENERATE\_SEC\_RANDOM'
      EXPORTING
        length         = ceil( min\_bits / 8 )
      IMPORTING
        random         = random
      EXCEPTIONS
        invalid\_length = 1
        no\_memory      = 2
        internal\_error = 3
        OTHERS         = 4.
    IF sy-subrc <> 0.
      out->write( 'Could not generate random number' ).
    ENDIF.
    bigint = create\_bigint\_from\_xstring( random ).
  ENDMETHOD.
  METHOD create\_xstring\_from\_bigint.
    TYPES lty\_x TYPE x LENGTH 1.
    DATA(cloned) = bigint->clone( ).
    xstring = \`\`.
    WHILE NOT cloned->is\_zero( ).
      DATA(byte) = CONV lty\_x( cloned->mod\_int4( 256 ) ).
      xstring = byte && xstring.
      cloned->div\_by\_two\_power( 8 ).
    ENDWHILE.
  ENDMETHOD.
  METHOD decrypt.
    DATA(decrypted\_number) = encrypted->clone( )->pow\_mod(
      io\_exponent = private\_key-exponent io\_modulus =
      private\_key-modulus ).
    DATA(xstring) = create\_xstring\_from\_bigint( decrypted\_number ).
    cl\_abap\_conv\_in\_ce=>create( encoding = '1100' )->convert(
      EXPORTING input = xstring IMPORTING data = decrypted ).
  ENDMETHOD.
  METHOD encrypt.
    DATA xstring TYPE xstring.
    DATA(converter) = cl\_abap\_conv\_out\_ce=>create( encoding = '1100' ).
    converter->write( message ).
    encrypted = create\_bigint\_from\_xstring( converter->get\_buffer( ) ).
    encrypted->pow\_mod( io\_exponent = public\_key-exponent io\_modulus =
      public\_key-modulus ).
  ENDMETHOD.
  METHOD generate\_key.
    DATA p TYPE REF TO cl\_abap\_bigint.
    DATA p\_minus\_1 TYPE REF TO cl\_abap\_bigint.
    DATA q TYPE REF TO cl\_abap\_bigint.
    DATA q\_minus\_1 TYPE REF TO cl\_abap\_bigint.
    DATA n TYPE REF TO cl\_abap\_bigint. " modulus
    DATA lambda TYPE REF TO cl\_abap\_bigint. " totient l(n)
    DATA e TYPE REF TO cl\_abap\_bigint. " public exponent e
    DATA d TYPE REF TO cl\_abap\_bigint. " private exponent d
    " for simplicity we take always a bit number divisible by 8
    DATA(min\_bits) = ceil( bits / 2 ).
    IF min\_bits MOD 8 <> 0.
      min\_bits += ( 8 - ( min\_bits MOD 8 ) ).
    ENDIF.
    " get two large prime numbers, p and q:
    " minimum is 8 bits for simplicity
    p = create\_random\_bigint( min\_bits ).
    next\_prime( CHANGING bigint = p ).
    p\_minus\_1 = p->clone( )->sub\_int4( 1 ).
    q = create\_random\_bigint( min\_bits ).
    next\_prime( CHANGING bigint = q ).
    IF p->compare( q ) = cl\_abap\_bigint=>equal. " very unlikely!!
      q->add\_int4( 2 ).
      next\_prime( CHANGING bigint = q ).
    ENDIF.
    ASSERT q->compare( p ) <> cl\_abap\_bigint=>equal.
    q\_minus\_1 = q->clone( )->sub\_int4( 1 ).
    " compute modulus = p \* q
    n = p->clone( )->mul( q ).
    " compute totient = lcm( (p - 1) \* (q - 1) )
    lambda = p\_minus\_1->clone( )->mul( q\_minus\_1 )->div(
      p\_minus\_1->clone( )->gcd( q\_minus\_1 ) )-quotient.
    " create fixed exponent; is public anyways
    e = cl\_abap\_bigint=>factory\_from\_int4( 65537 ). " best guess!
    " assure gcd( lambda, e ) = 1
    WHILE lambda->clone( )->gcd( e )->compare\_int4( 1 ) <>
      cl\_abap\_bigint=>equal.
      e->add\_int4( 2 ). " very unlikely!!
      next\_prime( CHANGING bigint = e ).
    ENDWHILE.
    " compute d \* e = 1 mod lambda
    d = e->clone( )->mod\_inverse( lambda ).
    ASSERT d->clone( )->mul( e )->mod( lambda )->compare\_int4( 1 ) =
      cl\_abap\_bigint=>equal.
    public\_key = VALUE #( modulus = n exponent =
      e bits = n->get\_number\_of\_bits( ) ).
    private\_key = VALUE #( modulus = n exponent =
      d bits = n->get\_number\_of\_bits( ) ).
  ENDMETHOD.
  METHOD make\_key\_printable.
    printable\_key = VALUE #( exponent = key-exponent->to\_string( )
      modulus = key-modulus->to\_string( ) bits = key-bits ).
  ENDMETHOD.
  METHOD next\_prime.
    IF bigint->mod\_int4( 2 ) = 0.
      bigint->add\_int4( 1 ).
    ENDIF.
    WHILE bigint->is\_prime( iv\_iterations = 5 ) =
      cl\_abap\_bigint=>no\_prime.
      bigint->add\_int4( 2 ).
    ENDWHILE.
  ENDMETHOD.
ENDCLASS.

Description   

Public and private RSA key pairs are generated using methods of the system class CL\_ABAP\_BIGINT. These key pairs are used to encrypt a text. The key pairs, as well as the encrypted and decrypted text, are generated as screen output.


### abenbigint1_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_math.htm) →  [System Class CL\_ABAP\_BIGINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_bigint_doc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BIGINT%2C%20Square%20Root%20Calculation%2C%20ABENBIGINT1_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BIGINT, Square Root Calculation

This example uses methods of the system class CL\_ABAP\_BIGINT to calculate the square root of a natural number to any number of decimal places.

Source Code   

\* Public class definition
CLASS cl\_demo\_bigint\_sqrt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:p\_int    TYPE i VALUE 2,
         p\_digits TYPE i VALUE 1000.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_bigint\_sqrt IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = p\_int
     )->add\_field( CHANGING field = p\_digits
     )->request( ).
    " compute arbitrary many digits of sqrt( p\_int )
    " compute the integer square root and add "2 \* p\_digits"
    " 0s at the end to get the "rational" part
    " at the end only the decimal point has to be positioned at the
    " right place
    out->write\_html(
      shift\_right( val =
        shift\_right( val = REDUCE string( LET number\_string =
          shift\_left( val = |{ p\_int NUMBER = RAW }| &&
          repeat( val = \`0\` occ = p\_digits \* 2 ) sub = \`0\` )
          sqrt = cl\_abap\_bigint=>factory\_from\_string(
            number\_string )->sqrt( )->to\_string( )
                             IN INIT sqrt\_str = \`\`
                             FOR n = 0 UNTIL n >= strlen( sqrt )
                             LET char = sqrt+n(1) IN
                             NEXT  sqrt\_str = sqrt\_str &&
                             COND #( WHEN n = strlen( sqrt ) - p\_digits
                             THEN \`.\` && char ELSE char ) )
                  sub = \`0\` )
                  sub = \`.\` )
    ).
  ENDMETHOD.
ENDCLASS.

Description   

The user can enter two integers:

-   p\_int is an integer that the square root will be calculated from.
-   p\_digits specifies the number of decimal places of the result.

Methods of the system class CL\_ABAP\_BIGINT are used to return the square root of p\_int with the required number of decimal places.


### abencl_abap_bigint_doc.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_math.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20CL_ABAP_BIGINT%2C%20ABENCL_ABAP_BIGINT_DOC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Class CL\_ABAP\_BIGINT

The documented system class CL\_ABAP\_BIGINT contains methods for calculations with integers of any size in ABAP.

Executable Examples

-   [CL\_ABAP\_BIGINT, Key Encryption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbigint_abexa.htm)
-   [CL\_ABAP\_BIGINT, Square Root Calculation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbigint1_abexa.htm)

Continue
![Example](exa.gif "Example") [CL\_ABAP\_BIGINT, Key Encryption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbigint_abexa.htm)
![Example](exa.gif "Example") [CL\_ABAP\_BIGINT, Square Root Calculation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbigint1_abexa.htm)


### abencl_abap_rational_doc.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_math.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20CL_ABAP_RATIONAL%2C%20ABENCL_ABAP_RATIONAL_DOC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Class CL\_ABAP\_RATIONAL

The documented system class CL\_ABAP\_RATIONAL contains methods for calculating with rational numbers without any precision loss. All basic operations, such as addition, multiplication, division, and subtraction, can be performed without any rounding errors.

Example

Creation of any rational numbers from string values using the method FACTORY\_FROM\_STRING of the class CL\_ABAP\_RATIONAL.

DATA(lo\_rational) = cl\_abap\_rational=>factory\_from\_string(
  EXPORTING iv\_value =
\`123451319241923741092743102751927431209374123461928374612983746129\` &
\`3461293641239461293641237946192785619264124\` ).
" do some calculations
"multiplication
lo\_rational->mul( cl\_abap\_rational=>factory\_from\_string(
  \`12345131924192374109274310275192743120937412346192837461298374612\` &
  \`93461293641239461293641237946192785619264124\` ) ).
"division
lo\_rational->div( cl\_abap\_rational=>factory\_from\_string(
\`1234513192419237410927431027519274312093741234619283746129837461293\` &
\`461293641239461293641237946192785619264124\` ) ).
"addition
lo\_rational->add( cl\_abap\_rational=>factory\_from\_string(
  \`12345131924192374109274310275192743120937412346192837461298374612\` &
  \`93461293641239461293641237946192785619264124\` ) ).
"subtraction
lo\_rational->sub( cl\_abap\_rational=>factory\_from\_string(
\`1234513192419237410927431027519274312093741234619283746129837461293\` &
\`461293641239461293641237946192785619264124\` ) ).


### abenrandom_number_class.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_math.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Random%20Numbers%2C%20ABENRANDOM_NUMBER_CLASS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Random Numbers

The class CL\_ABAP\_RANDOM calls the pseudo random number generator Mersenne Twister for different numeric types.

For the one-dimensional case, the following special classes generate random numbers for the different numeric types:

-   CL\_ABAP\_RANDOM\_INT for type i
-   CL\_ABAP\_RANDOM\_INT8 for type int8
-   CL\_ABAP\_RANDOM\_FLOAT for type f
-   CL\_ABAP\_RANDOM\_PACKED for type p
-   CL\_ABAP\_RANDOM\_PACKED\_DEC1 to CL\_ABAP\_RANDOM\_PACKED\_DEC14 for type p with 1 to 14 decimal places.
-   CL\_ABAP\_RANDOM\_DECFLOAT16 for type decfloat16
-   CL\_ABAP\_RANDOM\_DECFLOAT34 for type decfloat34

Example

Creation of a pseudo random number of the type i between 1 and 100, initialized by the UTC time.

FINAL(time) = cl\_demo\_date\_time=>get\_utc\_time( ).
FINAL(r) = cl\_abap\_random\_int=>create( seed = CONV i( time )
                                       min  = 1
                                       max  = 100 ).
