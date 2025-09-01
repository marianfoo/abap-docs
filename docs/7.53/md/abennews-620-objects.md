  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

ABAP Objects in Release 6.20

[1\. New variant PROVIDE FIELDS](#!ABAP_MODIFICATION_1@1@)
[
2\. Creating objects from the SAP XSLT processor](#!ABAP_MODIFICATION_2@2@)
[
3\. Polymorphism and object services](#!ABAP_MODIFICATION_3@3@)
[
4\. Accessing data references and static class components in JavaScript](#!ABAP_MODIFICATION_4@4@)
[
5\. Kernel methods](#!ABAP_MODIFICATION_5@5@)
[
6\. Recursions of RAISE EVENT](#!ABAP_MODIFICATION_6@6@)

Modification 1

New Variant PROVIDE FIELDS

The statement [PROVIDE FIELDS](javascript:call_link\('abapprovide.htm'\)) makes it possible to process [internal tables](javascript:call_link\('abenitab_oview.htm'\)) without [headers](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). The functions of the statement PROVIDE are therefore also available under [ABAP Objects](javascript:call_link\('abenabap_objects_oview.htm'\)).

Modification 2

Creating Objects from the SAP XSLT Processor

It is possible to create objects and call class methods from the [SAP XSLT processor](javascript:call_link\('abenxslt_processor_glosry.htm'\) "Glossary Entry"). Now only public methods are allowed, whereas previously private and [protected](javascript:call_link\('abenprotected_glosry.htm'\) "Glossary Entry") methods could also be called.

Parameter passing now supports all ABAP [elementary types](javascript:call_link\('abendata_types.htm'\)), any object references, and the generic types CSEQUENCE and XSEQUENCE. Previously, the types C, D, F, I, N, STRING, and T were supported.

Pass by parameter has been made more strict, so that for the data types D and I only valid specifications are permitted. Value losses for type p are now caught. The values of types X and XSTRING are converted into the [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") standard format [base64](javascript:call_link\('abenbase64_glosry.htm'\) "Glossary Entry").

Modification 3

Polymorphism and Object Services

The uniqueness of object keys is now checked not only by class, but across the whole inheritance hierarchy. The behavior of the following methods has also been changed:

-   The methods RELEASE and REFRESH\_PERSISTENT behave polymorphically, so that objects of subclasses can also be handled.
    
-   The methods GET\_PERSISTENT and DELETE\_PERSISTENT now access a table of the root class first, to optimize the type determination. Because the type is now stored over multiple transactions, it can no longer be changed.
    
-   By searching in the tables of the root class, the methods CREATE\_PERSISTENT and CREATE\_TRANSIENT now check whether the object key exists in another class of the inheritance hierarchy.
    

Modification 4

Accessing Data References and Static Class Components in JavaScript

Binding JavaScript objects to ABAP objects has been expanded to enable access to data reference variables and [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") (attributes and methods) of classes. In bound internal tables, rows can be deleted using the JS method deleteLines and the JS method append has been renamed appendLine.

Note

Support for the connection of JavaScript to ABAP will be discontinued without replacement in a release after 7.1.

Modification 5

Kernel Methods

The addition BY KERNEL MODULE of the statement [METHOD](javascript:call_link\('abapmethod.htm'\)) makes it possible to implement methods as [kernel methods](javascript:call_link\('abenkernel_methods.htm'\)).

Modification 6

Recursions of RAISE EVENT

The number of possible recursions of the statement [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)) has been raised from 63 to 1023.