  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

package

A package encapsulates [repository objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_object_glosry.htm "Glossary Entry") in self-contained units. Packages are themselves repository objects, and connect the repository objects they contain to the [Change and Transport System (CTS)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencts_glosry.htm "Glossary Entry"). The components of a package that can be used outside of the package must be published in a package interface. A package that accesses the repository objects of another package must declare this, and have permission from the other package. Packages are created using [Package Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpackage_builder_glosry.htm "Glossary Entry"). See also [Package Concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpackage_concept_glosry.htm "Glossary Entry").