---
title: "ALIASES"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapaliases_shortref.htm) Syntax ALIASES alias FOR intf~comp. Effect In the declaration part of a class or interface, this statement declares an alias name alias for a component comp of the interface intf. The naming conve
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapaliases.htm"
abapFile: "abapaliases.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abapaliases"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Implementing or Including Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterfaces.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ALIASES, ABAPALIASES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for imp
rovement:)

ALIASES

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapaliases_shortref.htm)

Syntax

ALIASES alias FOR intf~comp.

Effect

In the declaration part of a class or interface, this statement declares an alias name alias for a component comp of the interface intf. The [naming conventions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennaming_conventions.htm) apply to the name alias. The interface intf must be implemented in the same class or included in the same interface. The alias name can be used anywhere, where it is visible, instead of intf~comp, to access the interface component comp.

An alias name is a component of the class and the interface. It is in the same namespace as the other components and is inherited by subclasses. In classes, an alias name can be declared in every [visibility section](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvisibility_section_glosry.htm "Glossary Entry").

Hints

-   Within a context, such as a class declaration or method, only one name should be used to access components. The syntax check issues a warning if both the alias name and the full name intf~meth are used together.
-   When implementing interface methods in the implementation part of classes using METHOD and when [re-defining](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenredefinition_glosry.htm "Glossary Entry") methods using METHODS ... REDEFINITION, the alias name can also be used.

Example

In the interfaces i2, i3 and the class c1, aliases are declared for the methods of the included or implemented interfaces. In the implementation part of the class, the interface methods in the [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) statements are implemented using the interface component selector. However, the aliases of the classes could also be used here.

INTERFACE i1.
  METHODS meth.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
  ALIASES m1 FOR i1~meth.
  METHODS meth.
ENDINTERFACE.
INTERFACE i3.
  INTERFACES i2.
  ALIASES: m1 FOR i2~m1,
           m2 FOR i2~meth.
  METHODS meth.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i3.
    ALIASES: m1 FOR i3~m1,
             m2 FOR i3~m2,
             m3 FOR i3~meth.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD i1~meth.
    ... m2( ) ...
  ENDMETHOD.
  METHOD i2~meth.
    ... m3( ) ...
  ENDMETHOD.
  METHOD i3~meth.
    ... m1( ) ....
  ENDMETHOD.
ENDCLASS.