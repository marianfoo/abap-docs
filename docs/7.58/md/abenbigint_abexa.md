  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_math.htm) →  [System Class CL\_ABAP\_BIGINT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_bigint_doc.htm) → 

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