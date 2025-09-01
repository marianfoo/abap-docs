  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) → 

Derived Types

ABAP Compiler makes it possible to create derived types for type-secure parameters of a business object provider. Data types like this are known as derived types, since the compiler derives them from CDS entity types and their behavior definition implicitly.

Derived types contain at least the instance key (in accordance with the CDS definition) and possibly also the full row type, plus any other components produced by the model (for example, the parameters of an action).

When a business object provider is implemented, certain derived types can be used in method signatures in the context of the behavior implementation. This means the syntax can be used to create both local and global derived data types, which are used to declare input parameters or output parameters.

Continue
[Input Parameter Type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_input_parameters.htm)
[Type of the Output Parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_export_parameters.htm)
[Specific Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenspecific_derived_types.htm)
[Variables with Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariables_derived_types.htm)
[Component of the Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm)