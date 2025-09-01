  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Interface work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_areas_obsolete.htm) → 

TABLES \*

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_plus_shortref.htm)

Obsolete Syntax

TABLES \*table\_wa.

Effect

This statement declares an additional [table work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_work_area_glosry.htm "Glossary Entry") \*table\_wa, whose data type, like that of the regular [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) statement with its [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") structured data type table\_wa, is taken from ABAP Dictionary.

The additional table work area can be used just like the regular table work area. This applies in particular to obsolete [database accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_obsolete.htm).

Note

The statement TABLES cannot be used in classes. The addition TYPE can be used to reference the data types in ABAP Dictionary and declare any number of separate work areas.

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

Declares two work areas using DATA and how they are used in the INTO clause of the SELECT statement.

DATA: scarr1 TYPE scarr,
      scarr2 TYPE scarr.
SELECT SINGLE \*
       FROM scarr
       WHERE  carrid = 'LH'
       INTO @scarr1.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'UA'
       INTO @scarr2.