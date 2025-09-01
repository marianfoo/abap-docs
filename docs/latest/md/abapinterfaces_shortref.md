---
title: "INTERFACES - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces.htm) Syntax INTERFACES intf PARTIALLY IMPLEMENTED   ABSTRACT METHODS meth1 meth2 ... FINAL METHODS meth1 meth2 ...   ALL METHODS ABSTRACTFINAL  DATA
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_shortref.htm"
abapFile: "abapinterfaces_shortref.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abapinterfaces", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  I

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INTERFACES%2C%20ABAPINTERFACES_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INTERFACES - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces.htm)

Syntax

INTERFACES intf
  *\[*PARTIALLY IMPLEMENTED*\]*
  *{* *{* *\[*ABSTRACT METHODS meth1 meth2 ...*\]*
      *\[*FINAL METHODS meth1 meth2 ...*\]* *}*
    *|* *\[*ALL METHODS *{*ABSTRACT*|*FINAL*}**\]* *}*
  *\[*DATA VALUES attr1 = val1 attr2 = val2 ...*\]*.

Effect

Implements an interface in the [public](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpublic_glosry.htm "Glossary Entry") [visibility section](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of a class or includes it in another interface.

Additions   

-   ABSTRACT METHODS meth1 meth2 ...
    Makes the specified [instance methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_method_glosry.htm "Glossary Entry") meth1, meth2, ...abstract when the interface is implemented in a class.
-   FINAL METHODS meth1 meth2 ...
    Makes the specified instance methods meth1, meth2, ... final when the interface is implemented in a class.
-   ALL METHODS *{*ABSTRACT*|*FINAL*}*
    Makes all instance methods abstract or final when the interface is implemented in a class.
-   DATA VALUES attr1 = val1 attr2 = val2 ...
    Assigns [start values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstart_value_glosry.htm "Glossary Entry") val1, val2, ... to instance attributes attr1, attr2, ... when the interface is implemented in a class.
-   [PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_partially.htm)
    In test classes, suppresses the message that not all interfaces are implemented.