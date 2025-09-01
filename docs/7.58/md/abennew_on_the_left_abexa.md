  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) →  [NEW, Classes](javascript:call_link\('abennew_constructor_params_class.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Instance%20Operator%20NEW%20on%20the%20Left%2C%20ABENNEW_ON_THE_LEFT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Instance Operator NEW on the Left

Constructor expression with NEW on the left side of an expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_new\_on\_the\_left DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS class DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string.
    METHODS constructor.
ENDCLASS.
CLASS frame DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA oref TYPE REF TO class.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD constructor.
    frame=>oref = me.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_new\_on\_the\_left IMPLEMENTATION.
  METHOD main.
    NEW class( )->attr = 'foo'.
    out->write( frame=>oref->attr ).
    TRY.
        NEW class( )->('attr') = 'foo'.
        out->write( frame=>oref->attr ).
        NEW class( )->('foo') = 'foo'.
        out->write( frame=>oref->attr ).
      CATCH cx\_sy\_assign\_illegal\_component INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Although the reference variable only exists during the statement, the reference to the object is assigned to the reference variable user=>oref in the constructor of the class class, thus preserving the object. The example also shows dynamic specifications and the exception that is raised in case of an invalid attribute.