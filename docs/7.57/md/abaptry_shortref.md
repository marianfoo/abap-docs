  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TRY, ABAPTRY_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for im
provement:)

TRY - Short Reference

[Reference](javascript:call_link\('abaptry.htm'\))

Syntax

TRY.
    *\[*try\_block*\]*
  *\[*CATCH *\[*BEFORE UNWIND*\]* cx\_class1 cx\_class2 ... *\[*INTO oref*\]*.
    *\[*catch\_block*\]**\]*
    ...
  *\[*CLEANUP *\[*INTO oref*\]*.
    *\[*cleanup\_block*\]**\]*
ENDTRY.

Effect

Defines a monitored area try\_block, whose [class-based exceptions](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") cx\_class1, cx\_class2, ... can be handled in CATCH blocks catch\_block. The CLEANUP block cleanup\_block is executed if a class-based exception is raised in the TRY block and is not caught in a separate CATCH block but in a parent TRY control structure instead.

Additions   

-   BEFORE UNWIND
    Is given the context of the exception until the end of the exception handling
-   INTO oref
    Assigns oref a reference to the exception object.