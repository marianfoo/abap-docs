---
title: "INTERFACES - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces.htm) Syntax INTERFACES intf PARTIALLY IMPLEMENTED   ABSTRACT METHODS meth1 meth2 ... FINAL METHODS meth1 meth2 ...   ALL METHODS ABSTRACTFINAL  DATA VALUE
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_shortref.htm"
abapFile: "abapinterfaces_shortref.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abapinterfaces", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  I

INTERFACES - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces.htm)

Syntax

INTERFACES intf
  *\[*PARTIALLY IMPLEMENTED*\]*
  *{* *{* *\[*ABSTRACT METHODS meth1 meth2 ...*\]*
      *\[*FINAL METHODS meth1 meth2 ...*\]* *}*
    *|* *\[*ALL METHODS *{*ABSTRACT*|*FINAL*}**\]* *}*
  *\[*DATA VALUES attr1 = val1 attr2 = val2 ...*\]*.

Effect

Includes an interface in the [public](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpublic_glosry.htm "Glossary Entry") [visibility section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of a class or in another interface.

Additions

-   ABSTRACT METHODS meth1 meth2 ...
    Makes the specified [instance methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_method_glosry.htm "Glossary Entry") meth1, meth2, ...abstract when the interface is implemented in a class.
    
-   FINAL METHODS meth1 meth2 ...
    Makes the specified instance methods meth1, meth2, ... final when the interface is implemented in a class.
    
-   ALL METHODS *{*ABSTRACT*|*FINAL*}*
    Makes all instance methods abstract or final when the interface is implemented in a class.
    
-   DATA VALUES attr1 = val1 attr2 = val2 ...
    Assigns [start values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstart_value_glosry.htm "Glossary Entry") val1, val2, ... to instance attributes attr1, attr2, ... when the interface is implemented in a class.
    
-   [PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_partially.htm)
    In test classes, suppresses the message that not all interfaces are implemented.