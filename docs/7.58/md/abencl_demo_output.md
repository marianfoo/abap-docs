  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%20Output%20with%20CL_DEMO_OUTPUT%2C%20ABENCL_DEMO_OUTPUT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Example Output with CL\_DEMO\_OUTPUT

Class CL\_DEMO\_OUTPUT is provided by the ABAP Keyword Documentation to create simple outputs of data in example programs without the need of [classic lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_list.htm). It is not intended for production usage. It can be used in demonstration programs, local test programs or for temporary testing in production programs. It must not be used in production programs.

The class can be used via static methods and instance methods. For using instance methods, interface IF\_DEMO\_OUTPUT can be used. The following methods create output in an output stream:

-   Methods BEGIN\_SECTION, NEXT\_SECTION, and END\_SECTION create headers and open or close header levels.
-   Methods WRITE\_DATA, WRITE\_TEXT, WRITE\_XML, WRITE\_JSON, WRITE\_HTML and so on write different kinds of output to the output stream.
    -   With method WRITE\_DATA any kind of ABAP data can be written to the output stream.
    -   The other methods create formatted outputs of texts, XML, JSON, or HTML data.
-   Method WRITE is generic and handles ABAP data as well as texts in non-proportional format.
-   Methods DISPLAY\_... (available as static methods only) work as WRITE\_... but close the current output stream and open a new one. If a SAP GUI is available, the output is displayed in a window.
-   Method LINE creates a horizontal line.
-   Method DISPLAY closes the current output stream and opens a new one. If a SAP GUI is available, the output is displayed in a window. Optionally, data can be passed to DISPLAY in the same way as for WRITE.
-   Method GET works like DISPLAY but does not display the data. Instead the formatted output data are returned in a text string and can be handled further.

The standard output format is HTML. Optionally, also formats TEXT, JSON and XML can be set. The format is set with method SET\_MODE for the static methods or using the input parameter MODE of the factory method NEW for the instance methods.

Each instance method returns the self reference me in order to enable method chainings.

Hints

-   CL\_DEMO\_OUTPUT is based on a class CL\_DEMO\_OUTPUT\_STREAM that collects the data in an internal table that is converted to an XML file and raises an event on completion. Special handler classes convert the XML file to HTML, plain text, or JSON depending on the output mode.
-   CL\_DEMO\_OUTPUT is widely used in the example classes and programs of the ABAP Keyword Documentation.
-   CL\_DEMO\_OUTPUT is integrated into the ABAP console of [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry") that can be filled by executing classes (inheriting from CL\_DEMO\_CLASSRUN or implementing IF\_OO\_ADT\_CLASSRUN) or executable programs by F9.
-   There is also a class CL\_DEMO\_INPUT for rudimentary inputs. But this class is not as powerful as [selection screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Executable Example

[Usage of CL\_DEMO\_OUTPUT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output_abexa.htm)

Continue
![Example](exa.gif "Example") [Usage of CL\_DEMO\_OUTPUT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output_abexa.htm)