  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Object%20Transaction%2C%20ABENOO_TRANSACTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Object Transaction

This example demonstrates how a transaction code is linked with the method of a local class.

Source Code   

\*&---------------------------------------------------------------------\*
\*& Subroutine pool  DEMO\_OO\_TRANSACTION                                \*
\*&                                                                     \*
\*&---------------------------------------------------------------------\*
PROGRAM  demo\_oo\_transaction.
\*
CLASS demo\_class DEFINITION.
  PUBLIC SECTION.
    METHODS instance\_method.
ENDCLASS.
\*
CLASS demo\_class IMPLEMENTATION.
  METHOD instance\_method.
    cl\_demo\_output=>display( 'Instance method in local class' ).
  ENDMETHOD.
ENDCLASS.

Description   

The program DEMO\_OO\_TRANSACTION is a subroutine pool that does not contain any subroutines. Instead, the program contains the definition of the local class demo\_class, linked with the transaction code DEMO\_OO\_METHOD. When the transaction is called, the program is loaded, an instance of the class is created, and the method is called.