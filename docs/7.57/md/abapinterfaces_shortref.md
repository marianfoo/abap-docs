  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INTERFACES, ABAPINTERFACES_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

INTERFACES - Short Reference

[Reference](javascript:call_link\('abapinterfaces.htm'\))

Syntax

INTERFACES intf
  *\[*PARTIALLY IMPLEMENTED*\]*
  *{* *{* *\[*ABSTRACT METHODS meth1 meth2 ...*\]*
      *\[*FINAL METHODS meth1 meth2 ...*\]* *}*
    *|* *\[*ALL METHODS *{*ABSTRACT*|*FINAL*}**\]* *}*
  *\[*DATA VALUES attr1 = val1 attr2 = val2 ...*\]*.

Effect

Implements an interface in the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of a class or includes it in another interface.

Additions   

-   ABSTRACT METHODS meth1 meth2 ...
    Makes the specified [instance methods](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") meth1, meth2, ...abstract when the interface is implemented in a class.
-   FINAL METHODS meth1 meth2 ...
    Makes the specified instance methods meth1, meth2, ... final when the interface is implemented in a class.
-   ALL METHODS *{*ABSTRACT*|*FINAL*}*
    Makes all instance methods abstract or final when the interface is implemented in a class.
-   DATA VALUES attr1 = val1 attr2 = val2 ...
    Assigns [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") val1, val2, ... to instance attributes attr1, attr2, ... when the interface is implemented in a class.
-   [PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))
    In test classes, suppresses the message that not all interfaces are implemented.