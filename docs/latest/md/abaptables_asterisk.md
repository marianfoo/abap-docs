  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_declarations.htm) →  [Interface Work Areas](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_areas_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TABLES%20%2A%2C%20ABAPTABLES_ASTERISK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TABLES \*

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_plus_shortref.htm)

Obsolete Syntax

TABLES \*table\_wa.

Effect

This statement declares an additional [table work area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_work_area_glosry.htm "Glossary Entry") \*table\_wa, whose data type, like that of the regular [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm) statement with its [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") structured data type table\_wa, is taken from the ABAP Dictionary.

The additional table work area can be used just like the regular table work area. This applies in particular to obsolete [database accesses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_obsolete.htm).

Hint

The statement TABLES is forbidden in classes. The addition TYPE can be used to reference the data types in the ABAP Dictionary to declare any number of separate work areas.

Bad Example

Declaration of a regular and additional table work area and their use in obsolete short forms of the SELECT statement.

TABLES: scarr, \*scarr.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'.
SELECT SINGLE \*
       FROM \*scarr
       WHERE carrid = 'UA'.

Good Example

Declares two work areas using DATA and their use in the INTO clause of the SELECT statement.

DATA: scarr1 TYPE scarr,
      scarr2 TYPE scarr.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @scarr1.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'UA'
       INTO @scarr2.