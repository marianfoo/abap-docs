---
title: "Redefining Methods"
description: |
  Each subclass contains the components of all classes that are located between this class and the root node in the inheritance tree. The visibility of a component is always the same and cannot be changed. However, it is possible to redefine the public and protected instance methods of all preceding s
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance_redefinition.htm"
abapFile: "abeninheritance_redefinition.htm"
keywords: ["do", "if", "try", "method", "class", "abeninheritance", "redefinition"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Inheritance](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance.htm) → 

Redefining Methods

Each subclass contains the components of all classes that are located between this class and the root node in the inheritance tree. The visibility of a component is always the same and cannot be changed. However, it is possible to redefine the public and protected instance methods of all preceding superclasses using the addition [REDEFINITION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_redefinition.htm) of the statement [METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm), This modifies them to the required level of specialization. The interface of a redefined method cannot be changed here and the method is merely implemented as a new method with the same name. Constructors cannot be redefined and [special rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance_constructors.htm) apply instead.

The declaration of the method is preserved in the superclass as is its previous implementation. The implementation of the redefinition is created again in the subclass and obscures the implementation of the superclass. A redefined method works with the private attributes of the subclass and not with any private superclass attributes of the same name.

Each reference that points to a subclass object uses the redefined method, even if it was typed with reference to a superclass. In particular, this also applies to the [self reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenself_reference_glosry.htm "Glossary Entry") me. For example, if a superclass method m1 contains a call *\[*me->*\]*m2( ) and if m2 is redefined in a subclass, the call of m1 in an instance of the superclass causes the original method m2 to be executed and the call of m1 in an instance of the subclass causes the redefined method m2 to be executed.

Within a redefined method, [super->meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_super.htm) can be used to access the obscured method, for example to apply and supplement its functions.