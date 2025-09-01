  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object.htm) → 

CREATE OBJECT - parameter\_list

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object_shortref.htm)

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]**\]*.

Effect

The additions EXPORTING and EXCEPTIONS are used to pass actual parameters to the instance constructor statically or to assign return values to non-class-based exceptions.

-   When using the addition EXPORTING, the non-optional input parameters p1 p2 ... of the instance constructor of the instantiated class must be specified using the type-friendly actual parameters a1 a2 ... (the other input parameters are optional). As in regular method calls, a1, a2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). In other words, functions and expressions can be passed as actual parameters, alongside data objects. [Special rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm) apply in this case. If a subclass does not have an instance constructor implemented explicitly, the interface of the instance constructor from the next-highest superclass that explicitly implements the instance constructor is used.
    
-   The addition EXCEPTIONS can be used to assign return values to [non-class-based exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_non_class.htm) exc1 exc2...
    

The syntax and semantics are the same as in the parameter list for [static method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_static.htm).

Example

Creates a Control Framework (CFW) dialog box and passes input parameters to the instance constructor of the global class CL\_GUI\_DIALOGBOX\_CONTAINER. The class is defined implicitly using the static type of the reference variable dialog\_box.

DATA dialog\_box TYPE REF TO cl\_gui\_dialogbox\_container.
CREATE OBJECT dialog\_box
       EXPORTING parent = cl\_gui\_container=>desktop
                 width  = 1000
                 height = 350.