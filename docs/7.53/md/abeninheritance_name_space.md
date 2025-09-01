---
title: "Inheritance and the Component Namespace"
description: |
  A subclass contains all components of all its superclasses. Only the public and the protected components are visible. This is why all public and protected components of an inheritance tree are located in a single namespace and must have unique names. Private components, on the other hand, must only
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninheritance_name_space.htm"
abapFile: "abeninheritance_name_space.htm"
keywords: ["do", "try", "method", "class", "abeninheritance", "name", "space"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm) →  [Inheritance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninheritance.htm) → 

Inheritance and the Component Namespace

A subclass contains all components of all its superclasses. Only the public and the protected components are visible. This is why all public and protected components of an inheritance tree are located in a single namespace and must have unique names. Private components, on the other hand, must only be named uniquely within a class.

When methods are [redefined](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninheritance_redefinition.htm), the newly implemented method obscures the identically named method of the superclass. As soon as the method is redefined, it replaces the old method to ensure that the name remains unique. The [pseudo reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_reference_glosry.htm "Glossary Entry") [super->](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_super.htm) can be used in subclasses to access a method of the direct superclass obscured by a redefinition.