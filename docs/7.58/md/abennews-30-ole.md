  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 3.0](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-30.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OLE2%20Automation%20Controller%20in%20ABAP%20Release%203.0%2C%20ABENNEWS-30-OLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

OLE2 Automation Controller in ABAP Release 3.0

In ABAP release 3.0, the ABAP interpreter command set has been expanded to include key words that allow application programmers to edit external objects. OLE2 was supported as the first object model. The new language elements

-   [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_ole2.htm)
-   [SET PROPERTY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_property.htm)
-   [GET PROPERTY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_property.htm)
-   [CALL METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_ole2.htm)
-   [FREE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_object.htm)

make it possible to address all applications that provide functions in the form of an OLE2 Automation Server from ABAP. Examples of this are Microsoft products such as EXCEL or WINWORD.

All applications addressed from ABAP must be entered in a table edited using the transaction SOLE. This table defines whether type information exists for an application. The type information describes all the objects that an application can handle, all their methods and properties, and their parameters. It can be loaded into an [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") so that the ABAP processor can perform the necessary type conversions and is not dependent on the language of the OLE application.

SAP recommends that only the English names of the methods and object properties are used in ABAP. In this way, the ABAP program can edit the applications, regardless of the language in which they were installed.

The transaction OLE makes it possible to activate 3 OLE servers and to test methods and properties by pressing certain keys.

Apart from the ABAP enhancements, an OLE-compatible SAP GUI for 3.0 must also be active.

AS ABAP as OLE Automation Server   

Conversely, an [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") can itself be used as an automation server, which makes it possible to call function modules remotely from any OLE Automation Controller. For this purpose, the server program RFCSRV.EXE must be installed on the front end. For further information, see the RFC Automation User's Guide.