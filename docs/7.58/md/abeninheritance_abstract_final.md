---
title: "ABAP Objects - Abstract and Final Methods and Classes"
description: |
  Abstract and final methods or classes can be defined using the additions ABSTRACT and FINAL of the statements METHODS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) and CLASS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm). Abstract methods
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_abstract_final.htm"
abapFile: "abeninheritance_abstract_final.htm"
keywords: ["do", "if", "try", "method", "class", "abeninheritance", "abstract", "final"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Inheritance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Abstract%20and%20Final%20Methods%20and%20Classes%2C%20ABENINHERITANCE_ABSTRACT_FINAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion%20for%20improvement:)

ABAP Objects - Abstract and Final Methods and Classes

Abstract and final methods or classes can be defined using the additions ABSTRACT and FINAL of the statements [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) and [CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm).

Abstract methods are declared in abstract classes and cannot be implemented in the same class, only in a subclass of the inheritance tree. Abstract classes cannot, therefore, be instantiated. A non-abstract method is a concrete method. With the exception of the instance constructor, concrete instance methods of a class can also call their abstract methods.

Final methods can no longer be redefined in subclasses. They cannot have any additional subclasses and close an inheritance tree definitively.

Hints

-   In classes that are both abstract and final, only the static components can be used. Although instance components can be declared, they cannot be used. Specifying ABSTRACT and FINAL together is therefore only useful for [static classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_class_glosry.htm "Glossary Entry").
-   Private methods cannot be redefined and therefore cannot be abstract.