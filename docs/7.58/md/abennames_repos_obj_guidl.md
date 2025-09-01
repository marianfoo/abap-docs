  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_style_gdl.htm) →  [Naming](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Names%20of%20Repository%20Objects%2C%20ABENNAMES_REPOS_OBJ_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Names of Repository Objects

Background   

Repository objects are development objects maintained using the tools in ADT or ABAP Workbench. Each repository object is assigned to a package. Packages encapsulate the repository objects contained and use package interfaces to make objects available that should be usable outside the package. This complies with the [SoC principle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenseparation_concerns_guidl.htm "Guideline").

From a semantic point of view, packages represent a context for declarations, which is one level above the contexts of an ABAP program. Unlike the contexts of an ABAP program (programs, classes, procedures), a package does not generate a separate namespace.

The namespace for repository objects is defined as follows:

-   [Prefix namespace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprefix_name_space_glosry.htm "Glossary Entry")
    
    Development organizations (SAP departments, SAP partners, and SAP customers) can request a [prefix namespace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprefix_name_space_glosry.htm "Glossary Entry") for their own development systems. A prefix namespace has a name with at least 5 and a maximum of 10 digits, and the first digit and last digit must be slashes (/.../). After the namespace has been assigned, repository objects only can be created in systems, where the namespace is enabled by prefixing the namespace name /.../. If a package is created in this type of prefix namespace, it can only contain repository objects belonging to the same namespace. However, multiple packages can be created within a single prefix namespace. The available length for the actual name is reduced by the length of the [namespace prefix](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenname_space_prefix_glosry.htm "Glossary Entry"), including the slashes.
    
-   [Partner namespace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpartner_namespace_glosry.htm "Glossary Entry")
    
    If no prefix namespace is available, the names of repository objects created in partner systems should have a J as the first character. This means they are located in the partner namespace. For more information, see [SAP Note 38781](https://launchpad.support.sap.com/#/notes/38781).
    
-   [Customer namespace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencustomer_namespace_glosry.htm "Glossary Entry")
    
    If no prefix namespace is available, the names of repository objects created in customer systems or non-SAP development systems must have Y or Z as the first character. This means they are located in the customer namespace. Repository objects whose names start with Z can also be located within packages whose names start with Y and the other way round. For more information, see [SAP Note 16466](https://launchpad.support.sap.com/#/notes/16466).
    
-   [SAP namespace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_namespace_glosry.htm "Glossary Entry")
    
    If no prefix namespace is available, there are no real restrictions for the names of repository objects that are created in SAP's own development systems. The SAP namespace comprises the entire AS ABAP. Regardless of the namespace where a repository object resides, the name of the repository object is unique in the current AS ABAP. Therefore, when the object is addressed, nothing else needs to be specified. The namespaces (particularly the prefix namespace) were implemented to avoid namespace conflicts during transports between systems and upgrades. For SAP's own development systems, there is a cross-system table that ensures the uniqueness of names within the SAP namespace.
    

Hint

There is also a technical namespace for the global types, namely the global [object types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_type_glosry.htm "Glossary Entry") of the [class library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_library_glosry.htm "Glossary Entry") and the global [data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_type_glosry.htm "Glossary Entry") of [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry"). These must also be unique in order to be globally used for declaring reference variables.

Rule   

Clarify the type and affiliation of repository objects in names

Use common naming conventions for repository objects. The predefined name prefixes, CL\_, IF\_, and CX\_, apply to objects of the class library. If possible, create all repository objects in the prefix namespaces only. In addition, use a naming convention to clearly indicate which package or component the objects belong to.

Details   

Classes and interfaces are the most important entities for [programming with ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"). Either a class type or an interface type can be used to type a object reference. It is useful to uniquely flag these two types in the class library by means of a prefix. Global exception classes should also be uniquely identified by a prefix. The following naming conventions apply. These conventions are sometimes enforced by Class Builder but are sometimes only evaluated:

-   CL\_ for global classes
-   IF\_ for global interfaces
-   CX\_ for global exception classes
-   CL\_BADI\_, IF\_BADI\_, CX\_BADI\_ for classes, interfaces, and exception classes of Business Add-Ins (BAdI)

These naming conventions distinguish [object types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_type_glosry.htm "Glossary Entry") from the global [data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_type_glosry.htm "Glossary Entry") of [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"), with which they share a namespace.

In addition, the names of all repository objects should clearly identify the package or component they belong to. Technically speaking, a package does not generate its own namespace and therefore naming requires strict discipline. Using prefix namespaces is very helpful in itself. However, they are not intended for the package level but for bigger development projects, which usually comprise numerous packages.

Therefore, the names of the repository objects contained in a package should be labeled with a shared name component, which indicates the affiliation to a package or at least to an application component. The length of names is restricted to 30 characters or less, and the namespace prefix is included. Therefore, an abbreviation should be used for this name component and not the complete package name.

A global name should never be given for a package-specific or component-specific repository object. This would render the name useless for further general use. For example, general names of the SAP namespace (such as CHAR60 for a data element or CL\_ABAP\_MATH for a class) should only be declared in absolutely fundamental basis packages delivered by SAP and exposed by these packages in a generally available interface.

If developers find a repository object with a global name, they naturally assume that they can freely use the object in the way indicated by the name. Since the application of package boundaries is not checked thoroughly, repository objects with overly global names (particularly in the SAP namespace and also in the customer namespace) are now used throughout all AS ABAP packages. This can cause considerable difficulties when implementing real package encapsulation.

Note

The above rule supplements the global rule regarding [descriptive names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentelling_names_guidl.htm "Guideline"). With regard to technical information in repository object names, the same information stated in section on descriptive names also applies here (also refer to the discussion on prefixes and suffixes in [program-internal names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprog_intern_names_guidl.htm "Guideline")).

All development organizations are free to create own naming conventions on the basis of the above rule regarding [descriptive names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentelling_names_guidl.htm "Guideline"). However, note that the use of a namespace prefix only leaves limited space for the remaining name components. For example, the names of database tables are restricted to 16 characters. Therefore, the namespace prefix should not be too long. It should simply describe a product line using an abbreviation

Exception

Not all repository objects can be created in prefix namespaces. Some examples are authorization objects and type pools. In these cases, an additional package should be created that includes all of these objects. The object names and package names should, if possible, contain a relevant, normal prefix instead of the real namespace prefix /.../.

A similar guideline applies if further development is performed in areas that are traditionally located in the SAP namespace or the customer namespace. Instead of using a real namespace prefix, this can be simulated by using uniform prefixes when new packages and development objects are created.

If ABAP Workbench itself allocates [names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_orga_gdl.htm), for instance, for include programs, which are assigned to specific master programs (such as function pools or class pools), this name allocation always has priority over all other rules. This ensures that the workbench and the compiler run correctly.

Example

Refer to the repository objects of the example application in the package SABAP\_DEMOS\_CAR\_RENTAL.

The subpackages of the SABAP\_DEMOS\_CAR\_RENTAL package start with the same name as the superpackage (as [recommended](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentelling_names_guidl.htm "Guideline") in these guidelines). A suffix indicates their specialization. The same applies to the package interfaces. Instead of a real namespace prefix, the repository objects of the packages have the DEMO\_ prefix. This indicates that the objects are part of a demo package. The affiliation with the car rental application is indicated by the abbreviation CR (car rental).