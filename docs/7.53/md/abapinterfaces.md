  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_ifac_components.htm) →  [Implementing or Binding Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterfaces.htm) → 

INTERFACES

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_shortref.htm)

Syntax Forms

[Implementing Interfaces in Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_class.htm)
1\. INTERFACES intf
    *\[*[PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_partially.htm)*\]*
    *{* *{**\[*ABSTRACT METHODS meth1 meth2 ... *\]*
       *\[*FINAL METHODS meth1 meth2 ... *\]**}*
    *|* *\[*ALL METHODS *{*ABSTRACT*|*FINAL*}**\]* *}*
    *\[*DATA VALUES attr1 = val1 attr2 = val2 ...*\]*.
[Binding Interfaces into Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_ifac.htm)
2\. INTERFACES intf.

Effect

This statement implements interfaces in classes or binds interfaces into other interfaces. It can be used in the [public](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpublic_glosry.htm "Glossary Entry") [visibility section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the [declaration part](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_definition.htm) of classes and in [interface declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterface_definition.htm).

Continue
[INTERFACES - implementation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_class.htm)
[INTERFACES - integration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_ifac.htm)