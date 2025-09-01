  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

ABAP Objects in Release 6.20

[1\. New Variant PROVIDE FIELDS](#!ABAP_MODIFICATION_1@1@)
[
2\. Creating Objects from the SAP XSLT Processor](#!ABAP_MODIFICATION_2@2@)
[
3.Polymorphism and Object Services](#!ABAP_MODIFICATION_3@3@)
[
4\. Accessing Data References and Static Class Components in JavaScript](#!ABAP_MODIFICATION_4@4@)
[
5\. Kernel Methods](#!ABAP_MODIFICATION_5@5@)
[
6\. Recursions of RAISE EVENT](#!ABAP_MODIFICATION_6@6@)

Modification 1

New Variant PROVIDE FIELDS

The [PROVIDE FIELDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm) statement allows you to process [internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) without [headers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"). The functions of the PROVIDE statement are therefore also available under [ABAP Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm).

Modification 2

Creating Objects from the SAP XSLT Processor

It is possible to create objects and call class methods from the [SAP XSLT processor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxslt_processor_glosry.htm "Glossary Entry"). Now only public methods are allowed, whereas previously you could also call private and [protected](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprotected_glosry.htm "Glossary Entry") methods.

The transfer of parameters now supports all ABAP [elementary types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_types.htm), any object references, and the generic types CSEQUENCE and XSEQUENCE. Previously, the types C, D, F, I, N, STRING, and T were supported.

The transfer has been tightened, so that for the data types D and I only valid specifications are permitted. Value losses for type p are now caught. The values of types X and XSTRING are converted into the [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") standard format [base64](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbase64_glosry.htm "Glossary Entry").

Modification 3

Polymorphism and Object Services

The uniqueness of object keys is now checked not only by class, but across the whole inheritance hierarchy. The behavior of the following methods has also been changed:

-   The methods RELEASE and REFRESH\_PERSISTENT behave polymorphically, so that objects of subclasses can also be handled.
    
-   The methods GET\_PERSISTENT and DELETE\_PERSISTENT now access a table of the root class first, to optimize the type determination. Because the type is now stored over several transactions, it can no longer be changed.
    
-   By searching in the tables of the root class, the methods CREATE\_PERSISTENT and CREATE\_TRANSIENT now check whether the object key exists in another class of the inheritance hierarchy.
    

Modification 4

Accessing Data References and Static Class Components in JavaScript

Binding JavaScript objects to ABAP objects has been extended to allow you to access data reference variables and [static components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_component_glosry.htm "Glossary Entry") (attributes and methods) of classes. In bound internal tables, you can delete rows using the JS method deleteLines and the JS method append has been renamed appendLine.

Note

Support for the connection of JavaScript to ABAP will be discontinued without replacement in a release after 7.1.

Modification 5

Kernel Methods

The BY KERNEL MODULE addition to the [METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethod.htm) statement allows you implement methods as [kernel methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkernel_methods.htm).

Modification 6

Recursions of RAISE EVENT

The number of possible recursions of the statement [RAISE EVENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_event.htm) has been raised from 63 to 1023.